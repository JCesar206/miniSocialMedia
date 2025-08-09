import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-gray-950 text-white py-4 fixed bottom-0 w-full z-50">
			<div className="flex flex-col items-center">
				<div className="flex gap-4 text-xl">
					<a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer">
						<FaGithub className="hover:text-violet-500" size={20} />
					</a>
					<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer">
						<FaLinkedin className="hover:text-violet-500" size={20} />
					</a>
					<a href="mailto:jcesar206@hotmail.com">
						<FaEnvelope className="hover:text-violet-500" size={20} />
					</a>
				</div>
				<p className="text-sm text-violet-400 font-bold">&copy; {new Date().getFullYear()}
					Mini Social Media V1.0 JulyDevops. Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
}