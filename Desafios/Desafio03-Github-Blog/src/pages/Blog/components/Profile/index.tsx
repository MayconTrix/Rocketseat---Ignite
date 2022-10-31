import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExterlLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/MayconTrix.png" />

      <ProfileDetails>
        <header>
          <h1>Maycon Batista</h1>
          <ExternalLink text="GitHub" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            MayconTrix
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            RembrandTech
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            234567 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
