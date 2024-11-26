import { create } from "zustand";

export const useCount = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}))

export const useCardData = create((set) => ({

    lastCardId : 10,

    cardData : [
        {
          id: 1,
          title: 'Card 1',
          value: 'Value 1',
        },
        {
          id: 2,
          title: 'Card 2',
          value: 'Value 2',
        },
        {
          id: 3,
          title: 'Card 3',
          value: 'Value 3',
        },
        {
          id: 4,
          title: 'Card 4',
          value: 'Value 4',
        },
        {
          id: 5,
          title: 'Card 5',
          value: 'Value 5',
        },
        {
          id: 6,
          title: 'Card 6',
          value: 'Value 6',
        },
        {
          id: 7,
          title: 'Card 7',
          value: 'Value 7',
        },
        {
          id: 8,
          title: 'Card 8',
          value: 'Value 8',
        },
        {
          id: 9,
          title: 'Card 9',
          value: 'Value 9',
        },
        {
          id: 10,
          title: 'Card 10',
          value: 'Value 10',
        },
      ],

    addData: () => set((state) => ({ cardData: [...state.cardData, { id: state.lastCardId + 1, title: `Card ${state.lastCardId + 1}`, value: `Value ${state.lastCardId + 1}` }],
                                        lastCardId: state.lastCardId + 1})),
    updateData: (id, title, value) => set((state) => ({ cardData: state.cardData.map((item) => item.id === id ? { ...item, title, value } : item) })), //set((state) => ({ cardData: state.cardData.map((item) => item.id === id ? { ...item, title } : item) })),
    // setTitle: (title, id) => set((state) => ({ cardData: state.cardData.map((item) => item.id === id ? { ...item, title } : item) })),
}))


export const useSelectedCard = create((set) => ({
    selectedCard: [],
    // addSelectedCard: (id) => set((state) => ({ selectedCard: state.selectedCard.push(id) })),
    addSelectedCard: (id) => set((state) => ({ selectedCard: [ ...state.selectedCard, id] })),
    removeSelectedCard: (id) => set((state) => ({ selectedCard: state.selectedCard?.filter((item) => item !== id) }))
}))