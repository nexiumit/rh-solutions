export default function Legal() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Mentions légales</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Informations légales</h2>
            <p className="text-slate-600">
              <strong>Raison sociale :</strong> RH Solutions SAS<br />
              <strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France<br />
              <strong>SIRET :</strong> 123 456 789 00012<br />
              <strong>Capital social :</strong> 50 000 €<br />
              <strong>Directeur de publication :</strong> Jean Dupont<br />
              <strong>Email :</strong> contact@rh-solutions.fr<br />
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Hébergement</h2>
            <p className="text-slate-600">
              Ce site est hébergé par GitHub Pages<br />
              GitHub, Inc.<br />
              88 Colin P Kelly Jr St<br />
              San Francisco, CA 94107<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-slate-600">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive 
              de RH Solutions ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, 
              retransmission ou publication de ces différents éléments est strictement interdite sans l'accord 
              exprès par écrit de RH Solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Données personnelles</h2>
            <p className="text-slate-600">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit 
              d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. 
              Pour exercer ces droits, contactez-nous à : contact@rh-solutions.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Cookies</h2>
            <p className="text-slate-600">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités 
              du site pourraient ne pas fonctionner correctement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Responsabilité</h2>
            <p className="text-slate-600">
              RH Solutions s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, 
              nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises 
              à disposition. RH Solutions ne saurait être tenu responsable des erreurs, omissions ou résultats 
              obtenus par l'utilisation de ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Liens externes</h2>
            <p className="text-slate-600">
              Ce site peut contenir des liens vers des sites externes. RH Solutions n'exerce aucun contrôle 
              sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Droit applicable</h2>
            <p className="text-slate-600">
              Les présentes mentions légales sont régies par le droit français. Tout litige relatif à 
              l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux français.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </div>
  );
}