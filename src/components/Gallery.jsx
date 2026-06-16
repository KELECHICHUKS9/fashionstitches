import showcaseImage from '../assets/img1.jpeg';

export default function Gallery() {
  return (
    <>
      <section className="py-24 md:py-32 bg-surface-container-low" id="gallery">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
      <div className="max-w-xl">
      <span className="text-secondary font-label-lg text-label-lg tracking-widest uppercase mb-4 block">Couture Showcase</span>
      <h2 className="font-display-md text-display-md text-primary">Inside the Atelier</h2>
      </div>
      <div className="hidden md:block">
      <a className="font-label-lg text-label-lg text-secondary border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all uppercase tracking-widest" href="#">View Full Portfolio</a>
      </div>
      </div>
      <div className="masonry">
      <div className="masonry-item reveal">
      <img alt="Fashion Showcase" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src={showcaseImage}/>
      </div>
      <div className="masonry-item reveal" style={{ transitionDelay: "100ms" }}>
      <img className="w-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="A fashion designer's desk with scattered sketches, champagne gold pins, and burgundy silk ribbons. The scene is shot from a top-down editorial angle, highlighting the organized chaos of a creative process in a light-filled minimalist room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzJTKajcaH2ORlKrLvEqtATeSR0VqDcjr25ACLi0qpurb9UEuOnHzZJosYB6-cT3cGY2JUOwWs1hkOprQ9s3LbTV-gqUALILEYjcDRojJK3YZzksnux9yv1kJ56_mGiqeEzwcbCnJtHOKvxrT-FCzPAdzgxtOzUIvsWWvtC9u59gQ6Tw2UxUVbY1329w8PBVO_grkJbH3Y9NQXe9nF_a4XRK1s8XVFcUAKJcudgyCsw4K9qvVeCjzIkScM4iXd7BRoV4Urc8mK_Ps3"/>
      </div>
      <div className="masonry-item reveal" style={{ transitionDelay: "200ms" }}>
      <img alt="Fashion Details" className="w-full grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCplw25cssss_KMmjFRuxrrlbZztC_0kMknn1zxr-6YWmorBvSu2S879sCOq-AEBf2-WaDfgwxavI-KYDHsKgfdKnTlTQCTV5autlst8AhX-Pc-s1LjFx3TuWaQ6YOdoe-aiIym5M1hL5d6E3ME4ewmKRufD5E4o0fgh0BcVKFehNUOZDLUuolk0S5bOGBJ5S3SstD6Yg3wveoCOUgkbLefaGjU_b3sa5zatbBQB7QM2ipe6UNjP5gUKFYxP3zI5JJJLJ4bUUlMzy7g"/>
      </div>
      <div className="masonry-item reveal">
      <img className="w-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="A modern fashion studio with row after row of industrial sewing machines. The lighting is soft and high-key, emphasizing the clean, ivory surfaces and professional atmosphere of the training center." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1P5kGEXQnH6-C431eNfDBucrhdP4lfqJkZGMYnectB7CMtOyySJPnmg6wOhgvwsD1zCUKfu6MjPmAxkp-RieL60_Q9LWHaE_KP1VZ5iarTvbMfe0lJaHuteR74cYv78vNL3DfQBLRHmuFNLgMSSyrb5zhdMQjoo5kVSNjuM39ZfbgHuXwDZcVedsTpssdQlIVotOXQjR768DlNlDJ6a7uWjyGEN5Pnd3fJqM88BTAeqrt156a5Hv-rN8YgQdVodUq8UVCJoTu9UI0"/>
      </div>
      <div className="masonry-item reveal" style={{ transitionDelay: "150ms" }}>
      <img className="w-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="An editorial shot of a fashion student hand-stitching a complex garment. The lighting highlights the intricate needlework and the rich textures of the deep burgundy fabric against the neutral background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeRdz6T_81APGkfNT-yqMEZuzK4hAmgP5-m_PI93gDVoLTnSRcf0_lROpBSHq6iPp4ZHd5_NkoFVEMN8nZrtWn7UqTzqrLWzwz0WhShx6C5yG9nxXkqE5bYAFdDpl5e7djWPDEjQoHoqVv1OnUNFYnksSLFRTcV-pU91Iw93zAYAJd81bQiE58vj1eGCatVcl8VV8BD-X7vj3DGT1v6ENob-LObAF39ZUX4G6CMPklqncbMJze9AzenI9albdP9CdIoLBPANr04vCr"/>
      </div>
      <div className="masonry-item reveal" style={{ transitionDelay: "250ms" }}>
      <img className="w-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="A close-up of a mannequin wearing a structured champagne gold bodice. The background is a clean studio space with minimalist lines, perfectly encapsulating the brand's luxury editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL4QDRxz_PucRM78SIht45gtBEBXzkU1-ArBdtemG-9p-EzWhWm8SqHyU5DiTAg9YnNyESzua-gTh6mXDkzshtLv4Z3ODaHhTZVQ9MU0nedgg8wHa4zM-cw84y6i1vPDIRBywSe7BS0ERn9kdpYdcGDB1sOiONKuAOcTeikf_DbrlIuWa9Mi2frGtDEAnwfKX_2xPNLkq-9sFYCqFQSIKzxbAf5uaU6iXkaeMHfAIElOv8vRGidWg6IiOSOrLa05zHIK6CJJeiRZgh"/>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
