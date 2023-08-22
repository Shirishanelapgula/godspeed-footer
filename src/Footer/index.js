import {BsGithub,BsMastodon,BsDiscord,BsTwitter} from "react-icons/bs"
import "./index.css"

const Footer=()=>{
   
        return(
            <div className="main-container">
            <div className="text-container">
            <ul className="list">
            <li className="special-item">Resources</li>
            <li className="listitem">Documentation</li>
            <li className="listitem">Starter templates</li>
            <li className="listitem">Themes</li>
            <li className="listitem">Integrations</li>
        </ul>
        <ul className="list">
            <li className="special-item">Community</li>
            <li className="listitem">Showcase</li>
            <li className="listitem">Contributing</li>
            <li className="listitem">Open Collective</li>
            <li className="listitem">Join our Discord</li>
        </ul>
        <ul className="list">
            <li className="special-item">About</li>
            <li className="listitem">Who we are</li>
            <li className="listitem">Press</li>
            <li className="listitem">Careers</li>
            <li className="listitem">Partner with us!</li>
        </ul>
        <ul className="list">
            <li className="special-item">More links</li>
            <li className="listitem">Blog</li>
            <li className="listitem">Swag Shop</li>
            <li className="listitem">Wallpapers</li>
            
        </ul>
            </div>
            <div className="icons-container">
                <ul>
                    <li className="icon">
                        <BsGithub className="image"/>
                    </li>
                </ul>
                <ul>
                    <li className="icon">
                        <BsDiscord className="image"/>
                    </li>
                </ul>
                <ul>
                    <li className="icon">
                        <BsTwitter className="image"/>
                    </li>
                </ul>
                <ul>
                    <li className="icon">
                        <BsMastodon className="image"/>
                    </li>
                </ul>

            </div>
    </div>
        )
  
}

export default Footer
