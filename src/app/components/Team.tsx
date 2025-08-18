import avatarAnderson from "@assets/img/team/anderson.jpg";
import avatarCamila from "@assets/img/team/camila.png";
import avatarFernando from "@assets/img/team/camila.png";
import avatarDani from "@assets/img/team/dani.jpeg";
import avatarLeandro from "@assets/img/team/leandro.jpg";
import Image, { StaticImageData } from "next/image";

type SocialNetwork =
	| "twitter"
	| "facebook"
	| "instagram"
	| "linkedin"
	| "youtube";

type TeamMember = {
	name: string;
	image: StaticImageData;
	socialLinks: {
		[K in SocialNetwork]?: string;
	};
};

function socialLinkToURL(socialNetwork: SocialNetwork, link: string) {
	const baseURL = (() => {
		switch (socialNetwork) {
			case "twitter":
				return "twitter.com";
			case "facebook":
				return "facebook.com";
			case "instagram":
				return "instagram.com";
			case "youtube":
				return "youtube.com";
			case "linkedin":
				return "linkedin.com/in";
		}
	})();

	return `https://${baseURL}/${link}`;
}

export function Team() {
	const teamMembers: TeamMember[] = [
		{
			name: "Anderson Seixas",
			image: avatarAnderson,
			socialLinks: {
				linkedin: "anderson-seixas",
			},
		},
		{
			name: "Daniela Tissuya Silva Toda",
			image: avatarDani,
			socialLinks: {
				instagram: "toda.professora",
				linkedin: "daniela-toda-476818242",
				youtube: "@todaprofessora2778",
			},
		},
		{
			name: "Camila",
			image: avatarCamila,
			socialLinks: {
				linkedin: "camilaserrao",
				instagram: "cml.srr",
			},
		},
		{
			name: "Leandro Ferrarezi",
			image: avatarLeandro,
			socialLinks: {
				linkedin: "leoferrarezi",
				youtube: "@leoferrarezi",
			},
		},
		{
			name: "Fernando",
			image: avatarFernando,
			socialLinks: {},
		},
		{
			name: "Sabrina Feliciano",
			image: avatarCamila,
			socialLinks: {},
		},
	];

	return (
		<section id="team" className="team section">
			<div className="container section-title" data-aos="fade-up">
				<h2>Professores Orientadores</h2>
				<p>
					Conheça os professores orientadores do GPMecatrônica que estão
					transformando ideias em soluções inovadoras nas áreas de robótica e
					tecnologia.
				</p>
			</div>
			<div className="flex justify-center">
				<div className="flex flex-wrap gap-y-4 justify-center max-w-7xl">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="w-full md:w-1/2 xl:w-1/4 flex justify-center"
							data-aos="fade-up"
							data-aos-delay={(index + 1) * 100}
						>
							<div className="member text-center">
								<div className="w-64 h-64 overflow-hidden rounded-lg mx-auto">
									<Image
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<h4 className="mt-4 font-semibold">{member.name}</h4>
								<div className="social mt-2 flex justify-center gap-3">
									{Object.entries(member.socialLinks).map(
										([platform, link], idx) => (
											<a
												key={idx}
												href={socialLinkToURL(platform as SocialNetwork, link)}
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className={`bi bi-${platform}`} />
											</a>
										),
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
