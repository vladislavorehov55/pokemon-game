import React from 'react'

import styles from './style.module.css'
const Layout = ({id, title, urlBg='', colorBg='', children}) => {

    return (
        <section className={styles.root} id={id}
                 style={urlBg !== '' ? {background: `url(${urlBg})`} : {background: colorBg}}
        >
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}/>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
};
export default Layout