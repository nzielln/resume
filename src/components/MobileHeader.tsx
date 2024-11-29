"use client"
import { SITE_TITLE_FIRST, SITE_TITLE_LAST, SITE_SUBTITLE } from "@/app/constants";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MobileHeader = () => {
    return (
      <div className="mobile-header mx-8 my-8 flex justify-between">
        <div className="mobile-header-title flex">
          <h1 className="site-title mr-2">{SITE_TITLE_FIRST}</h1>
          <h1 className="site-title">{SITE_TITLE_LAST}</h1>
        </div>
        <div className="mobile-header-menu">
                <button onClick={
                    () => {
                        console.log("Menu was tapped")
                    }
          }>
            <FontAwesomeIcon icon={faBars} className="mobile-header-icon" />
          </button>
        </div>
      </div>
    )
}

export default MobileHeader