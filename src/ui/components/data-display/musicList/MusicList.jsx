import styles from './MusicList.module.css'

function MusicList() {
  return (
    <ul className={styles.listMusic}>
      <li className={styles.musicListItem}>
        <div className={styles.information}>
          <span className={styles.title}>Título música</span>
          <span className={styles.artist}>Artista</span>
          <span className={styles.time}>02:40</span>
        </div>
      </li>
      <li className={styles.musicListItem}>
        <div className={styles.information}>
          <span className={styles.title}>Título música</span>
          <span className={styles.artist}>Artista</span>
          <span className={styles.time}>02:40</span>
        </div>
      </li>
      <li className={styles.musicListItem}>
        <div className={styles.information}>
          <span className={styles.title}>Título música</span>
          <span className={styles.artist}>Artista</span>
          <span className={styles.time}>02:40</span>
        </div>
      </li>
    </ul>
  )
}

export default MusicList
