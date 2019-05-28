import React from "react";
import logo from "./logo.css";
import app from "./App.css";
import gallary from "./mobileGallary.css";
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='logo' />
				<div className='header-text'>
					<p />
				</div>
				<div className='selector-city'>
					<p />
					<div className='selector'>
						<div />
						<div />
					</div>
				</div>
				<div className='input-city'>
					<p />
				</div>
				<div className='date'>
					<div className='date-to' />
					<div className='date-from' />
				</div>
				<div className='ticket-type'>
					<div className='selector-ticket' />
				</div>
				<div className='find-tickets'>
					<p>Найти билеты</p>
				</div>
			</header>{" "}
			<main className='App-main'>
				<div className='popular-flights'>
					<div className='logo-way' />
					<p>Популярные направления перелётов из города</p>
					<div className='popular-city' />
				</div>
				<div className='travel-selector'>
					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>

					<div className='travel-slot'>
						<div className='travel-item'>
							<p>Text</p>
						</div>
					</div>
				</div>
				<div className='Gallary'>
					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>

					<div className='photo'>
						<img />
						<div className='ticket-info'>
							<div>
								<p>City</p>
								<p>Country</p>
							</div>
							<div>
								<p>Cost</p>
								<p>Date</p>
							</div>
						</div>
					</div>
				</div>
				<div className='popular-flights'>
					<div className='logo-way' />
					<p>Лучшие цены на авиабилеты за последний месяц</p>
				</div>
				<div className='country-tickets'>
					<div className='flights'>
						<div className='country'>
							<div className='country-icon' />
							<div className='country-from'>
								<p>Симферополь (Крым)</p>
								<p>КРЫМ</p>
							</div>
						</div>

						<div className='country-to'>
							<div className='country-name'>
								<p>Из Москвы</p>
								<p>Из Санкт-Петербурга</p>
								<p>Из Новосибирска</p>
								<p>Из Екатеринбурга</p>
								<p>Из Челябинска</p>
							</div>
							<div className='country-cost'>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 15 127 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
							</div>
						</div>
					</div>
					<div className='flights'>
						<div className='country'>
							<div className='country-icon' />
							<div className='country-from'>
								<p>Симферополь (Крым)</p>
								<p>КРЫМ</p>
							</div>
						</div>

						<div className='country-to'>
							<div className='country-name'>
								<p>Из Москвы</p>
								<p>Из Санкт-Петербурга</p>
								<p>Из Новосибирска</p>
								<p>Из Екатеринбурга</p>
								<p>Из Челябинска</p>
							</div>
							<div className='country-cost'>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 15 127 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
							</div>
						</div>
					</div>
					<div className='flights'>
						<div className='country'>
							<div className='country-icon' />
							<div className='country-from'>
								<p>Симферополь (Крым)</p>
								<p>КРЫМ</p>
							</div>
						</div>

						<div className='country-to'>
							<div className='country-name'>
								<p>Из Москвы</p>
								<p>Из Санкт-Петербурга</p>
								<p>Из Новосибирска</p>
								<p>Из Екатеринбурга</p>
								<p>Из Челябинска</p>
							</div>
							<div className='country-cost'>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 15 127 ₽</p>
								<p>от 4 813 ₽</p>
								<p>от 4 813 ₽</p>
							</div>
						</div>
					</div>
				</div>
				<div className='adv-one'>
					<p>
						Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
						стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
						728 авиакомпаний.
					</p>
					<p>
						Цены, найденные пользователями за последние 48 часов, не являются
						офертой.
					</p>
				</div>
				<div className='Special-offers'>
					<p>Спецпредложения на авиабилеты</p>
					<div className='offer'>
						<div className='offer-header'>
							<p>Билеты от 499 рублей</p>
						</div>
						<div className='offer-main'>
							<div>
								<p>POBEDA</p>
								<div>
									<p>от 499 Р</p>
									<p>Осталось 45 дней</p>
								</div>
							</div>
							<div>
								<p>
									Билеты от 499 рублей! Специальное предложение от авиакомпании
									Победа
								</p>
							</div>
							<div>
								<button>Узнать подробнее</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
