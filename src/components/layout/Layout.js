
import styles from './style.module.css'

const Layout = ({id, title, descr, urlBg='', colorBg=''}) => {
    return (
        <section id={id} style={id === 1 || id === 3 ? {background: urlBg} : {background: colorBg}}>
            <div className={styles.wrapper} style={{color: colorBg}}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`} style={{color: colorBg}}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout