import {useEffect, useState} from 'react';

import './styles.css';

const Game = ()=>{
    const [cardCount, setCardCount] = useState('');
    const [gameData, setGameData] = useState({
        started: false,
        cards: [],
        cardsOpenedIndexArr: [],
        successOpenedIndexArray: []
    });

    const handleChangeCardCount = (event)=>{
        setCardCount(event.target.value)
    };

    const generateCardsArr = ()=>{
        const cardArr = Array.from({length: cardCount});
        const numbersCount = cardCount / 2;
        for(let i = 1; i <= numbersCount; i++){
            let count = 0;
            while (count < 2){
                let index = Math.round(Math.random() * (cardCount-1));
                if(!cardArr[index]){
                    cardArr[index] = i;
                    count++
                }
            }
        }
        return cardArr
    };

    const startGame = ()=>{
        if(!cardCount){
            alert('Pleas enter card count')
        }else if(cardCount % 2){
            alert('Pleas enter even number')
        }else{
            setGameData({
                started: true,
                cards: generateCardsArr(),
                cardsOpenedIndexArr: [],
                successOpenedIndexArray: []
            })
        }
    };

    const showCard = (index)=>{
        if(!gameData.cardsOpenedIndexArr.includes(index) && gameData.cardsOpenedIndexArr.length<2){
            setGameData({
                ...gameData,
                cardsOpenedIndexArr: [...gameData.cardsOpenedIndexArr,index]
            })
        }
    };

    useEffect(()=>{
        setTimeout(()=>{
            if(gameData.cardsOpenedIndexArr.length === 2 && gameData.cards[gameData.cardsOpenedIndexArr[0]] === gameData.cards[gameData.cardsOpenedIndexArr[1]]){
                setGameData({
                    ...gameData,
                    successOpenedIndexArray: [...gameData.successOpenedIndexArray, ...gameData.cardsOpenedIndexArr],
                    cardsOpenedIndexArr: []
                })
            }else if(gameData.cardsOpenedIndexArr.length === 2){
                setGameData({
                    ...gameData,
                    cardsOpenedIndexArr: []
                })
            }
        },500)
    }, [gameData.cardsOpenedIndexArr]);

    useEffect(()=>{
        if(gameData.successOpenedIndexArray.length && gameData.successOpenedIndexArray.length === gameData.cards.length){
            alert('YOU WIN !!!')
        }
    },[gameData.successOpenedIndexArray]);

    return(
        <div>
            <div className='input-container'>
                <input type='number' value={cardCount} onChange={handleChangeCardCount}/>
                <button onClick={startGame}>Start</button>
            </div>
            {gameData.started && <div className='game-container'>
                {
                    gameData.cards.map((item,index)=><div key={index.toString()} className={`card-style ${(gameData.cardsOpenedIndexArr.includes(index) || gameData.successOpenedIndexArray.includes(index)) && 'opened-card-style'}`} onClick={()=>{showCard(index)}}>
                        <p  className={`item-style ${(gameData.cardsOpenedIndexArr.includes(index) || gameData.successOpenedIndexArray.includes(index)) && 'show-card-style'}`}>{item}</p>
                    </div>)
                }
            </div>}
        </div>
    )
};

export default Game;
