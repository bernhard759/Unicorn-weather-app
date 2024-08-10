from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import firebase_admin
from firebase_admin import auth
from firebase_admin import credentials

# App
app = FastAPI()

# Firebase auth stuff
security = HTTPBearer()
cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)


# Fucn to verify bearer token
def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

# Weather forecast endpoint
@app.get("/unicorn-weather")
def unicorn_weather(decoded_token=Depends(verify_token)):
    forecast = {
        "Rainbowville": "Sunny with a chance of sprinkles.",
        "Sparkle Town": "Cloudy with glitter showers.",
        "Glitter Peak": "Rainbow storms likely.",
    }
    return {"forecast": forecast}