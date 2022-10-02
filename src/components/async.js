import React from "react";

const Async = () => {
  return (
    <div className="headertext">
      <div className="async">
        <h1>Асинхронные запросы</h1>
        <p>
          Вы можете использовать встроенный в браузер метод window.fetch или
          любую AJAX-библиотеку, например Axios или jQuery AJAX. Лучшее место
          для асинхронного хапроса в методе componentDidMount.
        </p>
        <h3>Пример: Устанавливаем состояние из AJAX-запроса</h3>
        <p>
          Компонент ниже показывает, как в componentDidMount задать внутреннее
          состояние из результата AJAX-запроса.
        </p>
        <div className="componentscode">
          <pre>
            <code>
              {`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
                `}
            </code>
          </pre>
        </div>
        <p>Вот эквивалент с хуками:</p>
        <div className="componentscode">
          <pre>
            <code>
              {`function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}
                `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
export { Async };
