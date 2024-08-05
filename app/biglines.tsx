const BigLines: React.FC = () => {
  return (
    <div className="lineholder mx-auto max-w-full">
      <svg className="svgline max-w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="greyGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="100%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="90%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="80%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="70%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="60%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient6" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="50%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient7" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="40%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient8" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="40%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient9" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="30%" stopColor="rgb(var(--white))" />
          </linearGradient>
          <linearGradient id="greyGradient10" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--greyline))" />
            <stop offset="30%" stopColor="rgb(var(--white))" />
          </linearGradient>
        </defs>

        <rect
          id="#1"
          x="1px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient10)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="3s"
            begin="0.2s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#2"
          x="24px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient9)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.9s"
            begin="0.2s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#3"
          x="112px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient8)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.8s"
            begin="0.2s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#4"
          x="136px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient7)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.7s"
            begin="0.1s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#5"
          x="224px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient6)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.6s"
            begin="0.1s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#6"
          x="248px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient5)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.5s"
            begin="0.1s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#7"
          x="336px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient4)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.4s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#8"
          x="360px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient3)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.3s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#9"
          x="448px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient2)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.2s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#10"
          x="472px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient1)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.1s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#11"
          x="560px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient1)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#12"
          x="584px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient2)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.1s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#13"
          x="672px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient3)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.3s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#14"
          x="696px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient4)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.4s"
            begin="0s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#15"
          x="784px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient5)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.5s"
            begin="0.1s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#16"
          x="808px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient6)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.6s"
            begin="0.1s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#17"
          x="896px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient7)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.7s"
            begin="0.1s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#18"
          x="920px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient8)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.8s"
            begin="0.2s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#19"
          x="1008px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient9)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="2.9s"
            begin="0.2s"
            fill="freeze"
          />
        </rect>

        <rect
          id="#20"
          x="1031px"
          y="0"
          width="1px"
          height="100%"
          fill="url(#greyGradient10)"
        >
          <animate
            attributeName="height"
            from="0"
            to="100%"
            dur="3s"
            begin="0.2s"
            fill="freeze"
          />
        </rect>
      </svg>
    </div>
  );
};
export default BigLines;
