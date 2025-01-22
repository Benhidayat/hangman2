import './Languages.css';
import { languages } from '../../data/languages';

const Languages = () => {
    const langElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return <span key={lang.name}
                     style={styles}>
                    {lang.name}
                </span>
    })
  return (
    <section className='languages'>
        {langElements}
    </section>
  )
}

export default Languages
