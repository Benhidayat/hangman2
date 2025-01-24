import './Languages.css';
import { languages } from '../../data/languages';
import clsx from 'clsx';

const Languages = ({guessCount}) => {
    const langElements = languages.map((lang, index) => {
        const isLangLost = index < guessCount;
        const lostLang = clsx(isLangLost ? 'lost' : null)  

        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return <div key={lang.name}
                     style={styles}
                     className={lostLang}>
                    {lang.name}
                </div>
    })
  return (
    <section className='languages'>
        {langElements}
    </section>
  )
}

export default Languages
