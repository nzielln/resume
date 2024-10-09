import { SITE_TITLE_FIRST, SITE_TITLE_LAST, SITE_TITLE_FULL, SITE_SUBTITLE } from "@/app/constants"

const Header = () => {
    return (
      <div className="header-footer ml-8 mb-32">
        <h4 className="pb-4">{SITE_SUBTITLE}</h4>
        <h1 className="site-title">{SITE_TITLE_FIRST}</h1>
        <h1 className="site-title">{SITE_TITLE_LAST}</h1>
      </div>
    )
}

export default Header