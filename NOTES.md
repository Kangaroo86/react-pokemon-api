// getUserDecks()
const decks = [
  {
    id: 1,
    name: 'water deck',
    wins: 1,
    losses: 2
  },
  {
    id: 2,
    name: 'water deck 2',
    wins: 3,
    losses: 1
  },
  ...
]


// list of decks
<IndexPage decks={decks} />

 - list decks
 - add a new deck
 - delete a deck

// inside of IndexPage it's going to loop and render for each deck a DeckCard
<DeckCard deck={deck} />

========

<CreateDeckPage />

<CreateDeckForm />
Inputs:
 Deck Name:
 Select Pokemon ("cards")
 Submit
  this.props.onSubmit()



  {
    id: 12,
    name:---,
    wins:---,
    losses:---,
    cards: [
      {
        id: 21312,
        name: bulba,
        image: ---,
      },
      {
        id: 21312,
        name: bulba,
        image: ---,
      }
    ]
  },
  {
    id: 34,
    name:---,
    wins:---,
    losses:---,
    cards: [
      {
        id: 213,
        name: bulba,
        image: ---,
      },
      {
        id: 312,
        name: bulba,
        image: ---,
      }
    ]
  }
