export const SvgsIcons = ({ClickSvg, className, arrow, menu, paperPlane, sun, moon, download, github, gmail, email, linkeding, phone}) => {

    return (
      <>
          {github &&
              (
                  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          
              )
          }
          {gmail &&
            (
              <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd"/></svg>
            )
          }
          {
            email &&
            (
              <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            )
          }
          {
            linkeding &&
            (
              <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            )
          }
          { phone &&
            (
              <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/></svg>
            )
          }
          { download &&
          (
            <svg className={className} width="30" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 8h1v7.826l2.5-3.076.753.665-3.753 4.585-3.737-4.559.737-.677 2.5 3.064v-7.828zm7 12h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408"/></svg>
          )
          }
          {moon &&
            <svg xmlns="http://www.w3.org/2000/svg" 
                className={`icon icon-tabler icon-tabler-moon ${className}`}
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round" 
                strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
          }
          {sun &&
            (
              <svg xmlns="http://www.w3.org/2000/svg" 
                  className={`icon icon-tabler icon-tabler-sun ${className}`}
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="4" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            )
          }
          {paperPlane &&
          (
            <svg 
            className= {className}
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24">
              <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 
              15.362-7.68-3.974 14.57-3.75-3.339-2.17 
              2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/>
              </svg>
          )
          }
          {menu &&
            (
              <svg
                onClick={ClickSvg}
              xmlns="http://www.w3.org/2000/svg" 
                  className={`icon icon-tabler icon-tabler-menu-2 ${className}`} 
                  width="44" height="44" viewBox="0 0 24 24" 
                  strokeWidth="1.5" stroke="#2c3e50" fill="none" 
                  strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )
          }
          {arrow &&
            <svg
            onClick={ClickSvg} clipRule="evenodd" fillRule="evenodd" 
            className={className}
            strokeLinejoin="round" strokeMiterlimit="2" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m16.843 13.789c.108.141.157.3.157.456 0 
              .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 
              0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 
              4.258-5.498.142-.184.36-.29.592-.29.23 0 
              .449.107.591.291zm-7.564-.289h5.446l-2.718-3.522z" 
              fillRule="nonzero"/>
              </svg>
          }
      </>
    )
  }
  