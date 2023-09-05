export const NextIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_322_275)">
        <path
          d="M2 16C2 18.7689 2.82109 21.4757 4.35943 23.778C5.89777 26.0803 8.08427 27.8747 10.6424 28.9343C13.2006 29.9939 16.0155 30.2712 18.7313 29.731C21.447 29.1908 23.9416 27.8574 25.8995 25.8995C27.8574 23.9416 29.1908 21.447 29.731 18.7313C30.2712 16.0155 29.9939 13.2006 28.9343 10.6424C27.8747 8.08427 26.0803 5.89777 23.778 4.35943C21.4757 2.82109 18.7689 2 16 2C12.287 2 8.72601 3.475 6.1005 6.1005C3.475 8.72601 2 12.287 2 16ZM8 15H20.15L14.57 9.393L16 8L24 16L16 24L14.57 22.573L20.15 17H8V15Z"
          fill={props.color ?? "#98DDB8"}
        />
      </g>
      <g filter="url(#filter1_b_322_275)">
        <path
          d="M16 8L14.57 9.393L20.15 15H8V17H20.15L14.57 22.573L16 24L24 16L16 8Z"
          fill="#333333"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_322_275"
          x="-18"
          y="-18"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_322_275"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_322_275"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_322_275"
          x="-12"
          y="-12"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_322_275"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_322_275"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
