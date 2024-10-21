const fotos = [
    { id: 1, src: "https://via.placeholder.com/100?text=1", matched: false },
    { id: 2, src: "https://via.placeholder.com/100?text=2", matched: false },
    { id: 3, src: "https://via.placeholder.com/100?text=3", matched: false },
    { id: 4, src: "https://via.placeholder.com/100?text=4", matched: false },
    { id: 5, src: "https://via.placeholder.com/100?text=5", matched: false },
    { id: 6, src: "https://via.placeholder.com/100?text=6", matched: false },
    { id: 7, src: "https://via.placeholder.com/100?text=7", matched: false },
    { id: 8, src: "https://via.placeholder.com/100?text=8", matched: false },
];


export const cartasDuplicadas1 = fotos.sort(() => Math.random() - 0.5);
export const cartasDuplicadas2 = fotos.sort(() => Math.random() - 0.7);