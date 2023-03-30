import random
import sys
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QLabel, QVBoxLayout, QHBoxLayout, QWidget

# Define the deck of cards
suits = ['hearts', 'diamonds', 'clubs', 'spades']
ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

class Card:
    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit

    def value(self):
        if self.rank in ['Jack', 'Queen', 'King']:
            return 10
        elif self.rank == 'Ace':
            return 11
        else:
            return int(self.rank)

    def __str__(self):
        return self.rank + ' of ' + self.suit

class Deck:
    def __init__(self):
        self.cards = []
        for suit in suits:
            for rank in ranks:
                self.cards.append(Card(rank, suit))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal_card(self):
        return self.cards.pop()

class Hand:
    def __init__(self):
        self.cards = []

    def add_card(self, card):
        self.cards.append(card)

    def value(self):
        value = 0
        num_aces = 0
        for card in self.cards:
            value += card.value()
            if card.rank == 'Ace':
                num_aces += 1
        while value > 21 and num_aces:
            value -= 10
            num_aces -= 1
        return value

class Player:
    def __init__(self, name):
        self.name = name
        self.hand = Hand()

    def draw_card(self, deck):
        card = deck.deal_card()
        self.hand.add_card(card)

class BlackjackGame(QMainWindow):
    def __init__(self):
        super().__init__()
        self.deck = Deck()
        self.deck.shuffle()
        self.player = Player('Player')
        self.dealer = Player('Dealer')
        self.init_ui()

    def init_ui(self):
        self.setFixedSize(800, 600)
        self.setWindowTitle('Blackjack')

        # Create buttons
        self.hit_button = QPushButton('Hit', self)
        self.hit_button.clicked.connect(self.hit)
        self.stand_button = QPushButton('Stand', self)
        self.stand_button.clicked.connect(self.stand)
        self.new_game_button = QPushButton('New Game', self)
        self.new_game_button.clicked.connect(self.new_game)

        # Create labels
        self.player_label = QLabel('Player: ' + str(self.player.hand.value()), self)
        self.player_label.setAlignment(Qt.AlignCenter)
        self.dealer_label = QLabel('Dealer: ' + str(self.dealer.hand.value()), self)
        self.dealer_label.setAlignment(Qt.AlignCenter)
        self.result_label = QLabel('', self)
        self.result_label.setAlignment(Qt.AlignCenter)

        # Create layouts
        button_layout = QHBoxLayout()
        button_layout.addWidget(self.hit_button)
        button_layout.addWidget(self.stand_button)
        button_layout.addWidget(self.new_game_button)

        label_layout = QVBoxLayout()
        label_layout.addWidget(self.player_label)
        label_layout.addWidget(self.dealer_label)
        label_layout.addWidget(self.result_label)

        main_layout = QVBoxLayout()
        main_layout.addLayout(label_layout)
        main_layout.addLayout(button_layout)

        widget = QWidget()
        widget.setLayout(main_layout)
        self.setCentralWidget(widget)

    # Start the game
        self.new_game()

    def new_game(self):
        # Reset the player and dealer hands
        self.player.hand = Hand()
        self.dealer.hand = Hand()

        # Deal two cards to the player and one to the dealer
        self.player.draw_card(self.deck)
        self.player.draw_card(self.deck)
        self.dealer.draw_card(self.deck)

        # Update the UI
        self.update_ui()

        # Check for blackjack
        if self.player.hand.value() == 21:
            self.result_label.setText('Blackjack! You win!')
            self.hit_button.setEnabled(False)
            self.stand_button.setEnabled(False)

    def hit(self):
        # Draw a card for the player
        self.player.draw_card(self.deck)

        # Update the UI
        self.update_ui()

        # Check for bust
        if self.player.hand.value() > 21:
            self.result_label.setText('Bust! You lose!')
            self.hit_button.setEnabled(False)
            self.stand_button.setEnabled(False)

    def stand(self):
        # Dealer draws cards until their hand value is 17 or greater
        while self.dealer.hand.value() < 17:
            self.dealer.draw_card(self.deck)

        # Update the UI
        self.update_ui()

        # Determine the winner
        player_value = self.player.hand.value()
        dealer_value = self.dealer.hand.value()
        if dealer_value > 21:
            self.result_label.setText('Dealer bust! You win!')
        elif player_value > dealer_value:
            self.result_label.setText('You win!')
        elif dealer_value > player_value:
            self.result_label.setText('You lose!')
        else:
            self.result_label.setText('Push!')

        self.hit_button.setEnabled(False)
        self.stand_button.setEnabled(False)

    def update_ui(self):
        # Update the player and dealer labels
        self.player_label.setText('Player: ' + str(self.player.hand.value()))
        self.dealer_label.setText('Dealer: ' + str(self.dealer.hand.value()))

        # Update the result label if the game is over
        if not self.hit_button.isEnabled() and not self.stand_button.isEnabled():
            return

        if self.player.hand.value() > 21:
            self.result_label.setText('Bust! You lose!')
            self.hit_button.setEnabled(False)
            self.stand_button.setEnabled(False)
        elif self.dealer.hand.value() >= 17 and self.dealer.hand.value() <= 21:
            self.stand()
        elif self.player.hand.value() == 21:
            self.result_label.setText('Blackjack! You win!')
            self.hit_button.setEnabled(False)
            self.stand_button.setEnabled(False)

app = QApplication(sys.argv)
game = BlackjackGame()
game.show()
sys.exit(app.exec_())