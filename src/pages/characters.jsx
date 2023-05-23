import React from 'react';
import { useState } from 'react';
import styles from '../styles/characters.module.css';

function Characters() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    // 캐릭터 선택하면 style 변경, select visible
    const selectVisible = (id) => {
        let selects = document.getElementsByClassName(styles.select); // 클래스명으로 선택
        let selected = document.getElementsByClassName(id)[0];
        let img = document.getElementById(id);
        let imgs = document.getElementsByClassName(styles.imgs); // 클래스명으로 선택
        for (let i = 0; i < selects.length; i++) { // selects.length로 변경
            selects[i].style.visibility = "hidden";
            imgs[i].style.backgroundColor = "transparent";
            imgs[i].style.boxShadow = "none";
        }

        img.style.backgroundColor = "#FDD0D0";
        img.style.boxShadow = "0 0 0 3px #FFA8A8 inset";
        selected.style.visibility = "visible";
        setSelectedCharacter(id);
    };

    // 버튼 누르면 실행
    const handleSubmit = () => {
        console.log("Selected Character ID:", selectedCharacter);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>characters</div>
            <div className={styles.divNontitle}>
                <div className={styles.charactersDiv}>
                    <div className={styles.imgSelectDiv}>
                        <img
                            className={styles.imgs}
                            id='boy_blackhair'
                            src="/images/boy_blackhair.png"
                            alt="boy_blackhair"
                            onClick={() => selectVisible("boy_blackhair")}
                        />
                        <div className={`${styles.select} boy_blackhair`}>select</div>
                    </div>
                    <div className={styles.imgSelectDiv}>
                        <img
                            className={styles.imgs}
                            id="boy_brownhair"
                            src='/images/boy_brownhair.png'
                            alt="boy_brownhair"
                            onClick={() => selectVisible("boy_brownhair")}
                        />
                        <div className={`${styles.select} boy_brownhair`}>select</div>
                    </div>
                    <div className={styles.imgSelectDiv}>
                        <img
                            className={styles.imgs}
                            id="girl_shorthair"
                            src='/images/girl_shorthair.png'
                            alt="girl_shorthair"
                            onClick={() => selectVisible("girl_shorthair")}
                        />
                        <div className={`${styles.select} girl_shorthair`}>select</div>
                    </div>
                    <div className={styles.imgSelectDiv}>
                        <img
                            className={styles.imgs}
                            id="girl_longhair"
                            src='/images/girl_longhair.png'
                            alt="girl_longhair"
                            onClick={() => selectVisible("girl_longhair")}
                        />
                        <div className={`${styles.select} girl_longhair`}>select</div>
                    </div>
                </div>
                <button className={styles.register} onClick={handleSubmit}>submit</button>
            </div>
        </div>
    );
}

export default Characters;
