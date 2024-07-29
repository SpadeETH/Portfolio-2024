import React, { useEffect, useRef } from 'react';

const AnimatedLines: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgContainer = svgRef.current;
    if (!svgContainer) return;

    // Clear any existing lines before adding new ones
    svgContainer.innerHTML = '';

    const totalLines = 20;
    const smallGap = 24; // Espacement petit
    const largeGap = 88; // Espacement grand
    const animationDuration = '2s'; // Durée de l'animation

    // Création des groupes de lignes selon l'ordre de descente
    const descentOrder = [
        [8, 9, 10, 11],   // Temps 1: K9/K10/K11/K12
        [6, 7, 12, 13],   // Temps 2: K7/K8/K13/K14
        [4, 5, 14, 15],   // Temps 3: K5/K6/K15/K16
        [2, 3, 16, 17],   // Temps 4: K3/K4/K17/K18
        [0, 1, 18, 19],   // Temps 5: K1/K2/K19/K20
    ];

    // Calcul de la largeur totale des lignes avec espacement alterné
    const totalWidth = 1032;

    // Position initiale x1 pour centrer les lignes
    const initialX = (svgContainer.clientWidth - 1032) / 2;

    // Création des lignes et animations
    let currentX = initialX;
    for (let i = 0; i < totalLines; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', currentX.toString());
      line.setAttribute('y1', '0');
      line.setAttribute('x2', currentX.toString());
      line.setAttribute('y2', '0');
      line.setAttribute('stroke', 'var(--greyline)');
      line.setAttribute('stroke-width', '1');

      svgContainer.appendChild(line);

      // Calcul de l'espacement pour la prochaine ligne
      if (i % 2 === 0) {
        currentX += smallGap;
      } else {
        currentX += largeGap;
      }
    }

    // Ajout d'un délai avant le début de l'animation globale
    const globalAnimationDelay = 1000; // Délai en millisecondes

    // Application de l'ordre de descente aux animations avec délai
    descentOrder.forEach((group, index) => {
      const startTime = index * 400; // Décalage de temps pour chaque groupe

      group.forEach((lineIndex, idx) => {
        const line = svgContainer.querySelectorAll('line')[lineIndex];
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'y2');
        animate.setAttribute('from', '0');
        animate.setAttribute('to', '100%');
        animate.setAttribute('dur', animationDuration);
        animate.setAttribute('fill', 'freeze');
        if (idx === 0) {
          animate.setAttribute('begin', `${globalAnimationDelay + startTime}ms`); // Premier dans le groupe, utilise le délai global
        } else {
          animate.setAttribute('begin', `${globalAnimationDelay + startTime + (idx * 100)}ms`); // Autres dans le groupe, ajoute un délai
        }
        line.appendChild(animate);
      });
    });

    // Gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      const newTotalWidth = (totalLines / 2) * (smallGap + largeGap);
      const newInitialX = (svgContainer.clientWidth - newTotalWidth) / 2;
      let newCurrentX = newInitialX;

      svgContainer.querySelectorAll('line').forEach((line, i) => {
        line.setAttribute('x1', newCurrentX.toString());
        line.setAttribute('x2', newCurrentX.toString());
        newCurrentX += (i % 2 === 0) ? smallGap : largeGap;
      });
    };

    // Écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener('resize', handleResize);

    // Nettoyage des événements à la désinstallation du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" className="w-full h-screen ">
      {/* Lignes SVG seront ajoutées ici dynamiquement */}
    </svg>
  );
};

export default AnimatedLines;
