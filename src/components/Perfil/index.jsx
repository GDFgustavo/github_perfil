import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    return (
            <header className={styles.header}>
                <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
                <h1 className={styles.name}>
                    {nomeUsuario}
                </h1>
            </header>
        )
}

// Modos de exportações
// export default function() {}
// const Perfil = () => {}

export default Perfil;