import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from '../../firebase';
import styles from '../styles/characters.module.css';

function Characters() {
    const router = useRouter();
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    // 캐릭터 선택하면 style 변경, select visible
    const selectVisible = (id) => {
        let selects = document.getElementsByClassName(styles.select); // 클래스명으로 선택
        let selected = document.getElementsByClassName(id)[0];
        let img = document.getElementById(id);
        let imgs = document.getElementsByClassName(styles.imgs); // 클래스명으로 선택
        for (let i = 0; i < selects.length; i++) {
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
    const handleSubmit = async () => {
        console.log("Selected Character ID:", selectedCharacter);

        // Firestore에 사용자 정보 업데이트
        try {
            const userId = firebase.auth().currentUser.uid;

            await firebase.firestore().collection('users').doc(userId).update({
                characterId: selectedCharacter,
            });

            console.log('캐릭터 정보가 성공적으로 업데이트되었습니다.');

        } catch (error) {
            console.log('캐릭터 정보 업데이트 중 오류가 발생했습니다:', error);
        }
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
