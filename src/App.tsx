import type { FC } from "react";

import "./sass/main.scss";

const Logo = new URL("./assets/logo.png", import.meta.url).href;
const Stats = new URL("./assets/stats.png", import.meta.url).href;

// Brands
const FedExLogo = new URL("./assets/brands/fedex.png", import.meta.url).href;
const GoogleLogo = new URL("./assets/brands/google.png", import.meta.url).href;
const OlaLogo = new URL("./assets/brands/ola.png", import.meta.url).href;
const MicrosoftLogo = new URL("./assets/brands/microsoft.png", import.meta.url).href;
const AmazonLogo = new URL("./assets/brands/amazon.png", import.meta.url).href;
const FedxLogo = new URL("./assets/brands/fedx.png", import.meta.url).href;
const WalmartLogo = new URL("./assets/brands/walmart.png", import.meta.url).href;
const ComplexImage = new URL("./assets/complex.png", import.meta.url).href;

// Icons
const CheckIcon = new URL("./assets/icons/check.png", import.meta.url).href;
const IdeaIcon = new URL("./assets/icons/idea.png", import.meta.url).href;
const ClapingIcon = new URL("./assets/icons/claping.png", import.meta.url).href;
const HandIcon = new URL("./assets/icons/hand.png", import.meta.url).href;
const PenIcon = new URL("./assets/icons/pen.png", import.meta.url).href;
const SettingsIcon = new URL("./assets/icons/setting.png", import.meta.url).href;

const FacebookIcon = new URL("./assets/icons/facebook.png", import.meta.url).href;
const InstagramIcon = new URL("./assets/icons/instagram.png", import.meta.url).href;
const TwitterIcon = new URL("./assets/icons/twitter.png", import.meta.url).href;
const YoutubeIcon = new URL("./assets/icons/youtube.png", import.meta.url).href;

const Brands = [FedExLogo, GoogleLogo, OlaLogo, MicrosoftLogo, AmazonLogo, FedxLogo, WalmartLogo];

const Things: Object[] = [
	{
		icon: IdeaIcon,
		title: "Creative Ideas",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
	},
	{
		icon: PenIcon,
		title: "Beautiful Blog",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
	},
	{
		icon: ClapingIcon,
		title: "User Friendly",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
	},
	{
		icon: SettingsIcon,
		title: "Perfect Showcase",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
	},
	{
		icon: HandIcon,
		title: "Easy to Use",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
	},
];

const App: FC = (): JSX.Element => {
	return (
		<>
			<header>
				<div className="container">
					<div className="navigation">
						<div className="logo">
							<img src={Logo} alt="Logo" />
						</div>
						<nav>
							<ul>
								<li>
									<a href="#" className="active">
										Home
									</a>
								</li>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Contact</a>
								</li>
								<li>
									<a href="#">Testimonial</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
							</ul>
						</nav>
						<div className="get_started">
							<button>Get Started</button>
						</div>
					</div>
					<div className="content">
						<div className="content__left_side">
							<p>Inspiration Technology.</p>
							<h1>Runs faster.</h1>
							<h2>Costs less and never breaks.</h2>
							<div className="line"></div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit
								tristique rhoncus, nisi, malesuada. Tellus consequat
							</p>
							<div className="content__left_side__buttons">
								<button>Get Started</button>
								<button>Free Trail</button>
							</div>
						</div>
						<div className="content__right_side">
							<img src={Stats} />
						</div>
					</div>
				</div>
			</header>
			<div className="brands">
				<div className="container">
					<div className="brands__content">
						{Brands.map((brand: any, i: number) => (
							<div key={i}>
								<img src={brand} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="complex">
				<div className="container">
					<div className="complex__content">
						<div className="complex__content__left_side">
							<img src={ComplexImage} />
						</div>
						<div className="complex__content__right_side">
							<p>Lorem ipsum dolor sit ame</p>
							<h2>Simple Solutions for Complex Connections</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida feugiat
								neque, ipsum faucibus. Pharetra vel suspendisse mi odio a velit feugiat sapien.
							</p>
							<div className="complex__content__right_side-checker">
								<div>
									<img src={CheckIcon} />
									<span>High Analysis</span>
								</div>
								<div>
									<img src={CheckIcon} />
									<span>Certified Institute</span>
								</div>
							</div>
							<button>Learn More</button>
						</div>
					</div>
				</div>
			</div>
			<div className="calification">
				<div className="container">
					<div className="calification__content">
						<div>
							<p>50+</p>
							<p>Happy Clients</p>
						</div>
						<div>
							<p>550+</p>
							<p>Projects Completed</p>
						</div>
						<div>
							<p>250</p>
							<p>Dedicated Members</p>
						</div>
						<div>
							<p>30+</p>
							<p>Awards Won</p>
						</div>
					</div>
				</div>
			</div>
			<div className="things">
				<div className="container">
					<div className="things_content">
						<div className="things_content_apart">
							<p>Your Vision, Our Future.</p>
							<h2>Committed to People, Committed </h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						{Things.map((thing: any, i: number) => (
							<div
								className={`things_content_normal ${
									thing.title === "Creative Ideas" ? "things_content_active" : ""
								}`}
								key={i}
							>
								<img src={thing.icon} />
								<h3>{thing.title}</h3>
								<p>{thing.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<footer>
				<div className="container">
					<div className="footer_content">
						<div className="footer_content_brand">
							<img src={Logo} />
							<div className="logobrand">
								<img src={FacebookIcon} />
								<img src={TwitterIcon} />
								<img src={InstagramIcon} />
								<img src={YoutubeIcon} />
							</div>
						</div>
						<div className="footer_content_short">
							<h4>SHORT LINKS</h4>
							<p>Home</p>
							<p>Serivces</p>
							<p>Screeshots</p>
							<p>Contact</p>
						</div>
						<div className="footer_content_help">
							<h4>Help Link</h4>
							<p>How To download</p>
							<p>How it work</p>
							<p>Video tutorial</p>
							<p>FAQ</p>
						</div>
						<div className="footer_content_links">
							<h4>SHORT LINKS</h4>
							<p>Google Play Store</p>
							<p>Apple App Store</p>
							<p>Download Directly</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default App;
