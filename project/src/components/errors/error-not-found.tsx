import Footer from '../footer/footer';
import Logo from '../logo/logo';

function ErrorNotFound(): JSX.Element {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>

      <div className="sign-in user-page__content">
        <form action="/" className="sign-in__form">
          <div className="sign-in__message">
            <p>Error 404 page not found</p>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">На главную</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default ErrorNotFound;
