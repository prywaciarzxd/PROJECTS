import requests
from bs4 import BeautifulSoup
from time import sleep

URL_LINK = 'https://www.thefashionrequest.com/playlist-top-100-most-streamed-songsspotify/'

response = requests.get(URL_LINK)

soup = BeautifulSoup(response.content, 'html.parser')
all_elements = soup.find_all(class_="has-text-align-left")
for element in all_elements:
    if element == "MUSIC" or element == "STREAMS" or element == "POSTER":
        pass
    else:
        with open("top-100-song.txt", mode="a") as file:
            file.write(f'{element.text} \n')




