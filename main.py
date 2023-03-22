import requests
from plyer import notification
import datetime
import time

try:
    value_data = requests.get('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/').json()
    data = value_data['rates'][0]['bid']
except:
    print("I cant fetch the data from the internet!")

if data != None:
    while(True):
        notification.notify(
            #title of the notification,
            title = "Dollar current bid {}".format(datetime.date.today()),
            #the body of the notification
            message = "Current dollar bid value : {data}".format(data=data),
            #creating icon for the notification
            #we need to download a icon of ico file format
            # the notification stays for 50sec
            timeout  = 50
        )
        time.sleep(60*60*4)


