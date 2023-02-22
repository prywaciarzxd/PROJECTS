from tkinter import *
from tkinter import ttk
from tkinter import messagebox

window = Tk()
window.title("Tic tac toe game")

clicked = True
count = 0

def dissable_all_buttons():
    b1.config(state=DISABLED)
    b2.config(state=DISABLED)
    b3.config(state=DISABLED)

    b4.config(state=DISABLED)
    b5.config(state=DISABLED)
    b6.config(state=DISABLED)

    b7.config(state=DISABLED)
    b8.config(state=DISABLED)
    b9.config(state=DISABLED)


#Check is anyone won

def win():
    global winner
    winner = False

    if b1['text'] == 'X' and b2['text'] == 'X' and b3['text'] == 'X':
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    elif b4['text'] == 'X' and b5['text'] == 'X' and b6['text'] == 'X':
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    elif b7['text'] == 'X' and b8['text'] == 'X' and b9['text'] == 'X':
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    elif b1['text'] == "X" and b5['text'] == "X" and b9['text'] == "X":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    elif b3['text'] == "X" and b5['text'] == "X" and b7['text'] == "X":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    elif b1['text'] == "X" and b4['text'] == "X" and b7['text'] == "X":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    elif b2['text'] == "X" and b5['text'] == "X" and b8['text'] == "X":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    elif b3['text'] == "X" and b6['text'] == "X" and b9['text'] == "X":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player X has won!")
        dissable_all_buttons()
    

    if b1['text'] == '0' and b2['text'] == 'O' and b3['text'] == 'O':
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()
    elif b4['text'] == 'O' and b5['text'] == 'O' and b6['text'] == 'O':
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()
    elif b7['text'] == 'O' and b8['text'] == 'O' and b9['text'] == 'O':
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()
    elif b1['text'] == "O" and b5['text'] == "O" and b9['text'] == "O":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()
    elif b3['text'] == "O" and b5['text'] == "O" and b7['text'] == "O":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()
    elif b1['text'] == "O" and b4['text'] == "O" and b7['text'] == "O":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()
    elif b2['text'] == "O" and b5['text'] == "O" and b8['text'] == "O":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()
    elif b3['text'] == "O" and b6['text'] == "O" and b9['text'] == "O":
        winner = True
        messagebox.showinfo("Tic tac toe game", "Player O has won!")
        dissable_all_buttons()


#BUILDING BUTTONS
def b_click(b):
    global clicked, count

    if b['text'] == " " and clicked == True:
        b['text'] = 'X'
        b['bg'] = "red"
        clicked = False
        count += 1
        win()
    elif b['text'] == " " and clicked == False:
        b['text'] = 'O'
        b['bg'] = "yellow"
        clicked = True
        count += 1
        win()
    else:
        messagebox.showerror("Tic tac toe", "Hey that box already has been selected")
    



b1 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b1))
b2 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b2))
b3 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b3))

b4 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b4))
b5 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b5))
b6 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b6))

b7 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b7))
b8 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b8))
b9 = Button(window, text=" ", font=("Helvetica", 20), height=3, width=6, bg="grey", command=lambda: b_click(b9))

buttons = [b1, b2, b3, b4, b5, b6, b7, b8, b9]

b1.grid(row=0, column=0)
b2.grid(row=0, column=1)
b3.grid(row=0, column=2)

b4.grid(row=1, column=0)
b5.grid(row=1, column=1)
b6.grid(row=1, column=2)

b7.grid(row=2, column=0)
b8.grid(row=2, column=1)
b9.grid(row=2, column=2)

window.mainloop()