import styles from '../../styles/ScrollList.module.css';
import ShareField from '../ShareField/index';

const colors = {
  '10%': 'gold',
  '30%': '#8C2F8C', // purple
  '60%': '#EE7342', // orange
  '70%': '#D6CECE', // grey
  '100%': '#A2DCF3', // light blue
  etc: 'rgb(128, 87, 87)', // brown
  'saved': 'rgb(168, 228, 56)', // green
};

const ScrollCard = ({
  name,
  stylesClassName,
  lowPrice,
  midPrice,
  handleClick,
}) => (
  <li key={name} className={stylesClassName} onClick={handleClick}>
    <h3>{name}</h3>
    <span>Low: {lowPrice}</span>
    <span>Mid: {midPrice}</span>
  </li>
);

const ScrollList = ({
  type,
  items,
  savedScrollNames,
  handleClick,
  savedScrollsMessage,
  link,
}) => {
  const isSavedList = type === 'saved';
  const isValidLink = link && !link.slice(link.length - 6).includes('saved');
  return (
    <ul
      id={type}
      key={type}
      className={styles.list}
      style={{ borderColor: colors[type] }}
    >
      <h2 style={{ backgroundColor: colors[type] }}>
        {isSavedList ? 'Saved Scrolls' : type}
      </h2>
      {isSavedList && savedScrollsMessage && (
        <h3 className={styles.savedTitle}>{savedScrollsMessage}</h3>
      )}
      {items.map(({ name, lowPrice, midPrice }) => (
        <ScrollCard
          key={name}
          name={name}
          stylesClassName={
            savedScrollNames && savedScrollNames.includes(name)
              ? styles.savedCard
              : styles.card
          }
          lowPrice={lowPrice}
          midPrice={midPrice}
          handleClick={() => handleClick(window.btoa(name))}
        />
      ))}
      {isValidLink && <ShareField link={link} />}
    </ul>
  );
};

export default ScrollList;
