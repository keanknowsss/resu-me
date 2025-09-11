import { useResumeContext } from "@/ResumeContext";
import {
  fa1,
  fa2,
  fa3,
  faAt,
  faCalendarDays,
  faGlobe,
  faLink,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Resume() {
  const { personalInfo } = useResumeContext();

  const hasName = personalInfo.firstName || personalInfo.middleName || personalInfo.lastName;

  return (
    <div className="paper">
      <div className="resume-content">
        {hasName && (
          <h2 className="name">
            {personalInfo.firstName} {personalInfo.middleName} {personalInfo.lastName}
          </h2>
        )}

        {personalInfo.jobTitle && <p className="position">{personalInfo.jobTitle}</p>}
        <div className="flex items-center r-gap-3 r-mt-4 r-mb-5">
          {/* Contact Number */}
          {personalInfo.contactNumber && (
            <p className="text-icons">
              <FontAwesomeIcon icon={faPhone} />
              {personalInfo.contactNumber}
            </p>
          )}
          {/* Email */}
          {personalInfo.email && (
            <p className="text-icons">
              <FontAwesomeIcon icon={faAt} />
              {personalInfo.email}
            </p>
          )}
          {/* LinkedIn */}
          {personalInfo.linkedIn && (
            <p className="text-icons">
              <FontAwesomeIcon icon={faLink} />
              {personalInfo.linkedIn}
            </p>
          )}
          {/* Location */}
          {personalInfo.location && (
            <p className="text-icons">
              <FontAwesomeIcon icon={faLocationDot} />
              {personalInfo.location}
            </p>
          )}
          {/* Location */}
          {personalInfo.website && (
            <p className="text-icons">
              <FontAwesomeIcon icon={faGlobe} />
              {personalInfo.website}
            </p>
          )}
        </div>
        <div className="flex">
          <div className="basis-3/5 r-pe-5">
            {personalInfo.summary && (
              <div className="r-pb-5">
                <h3 className="section-title">Summary</h3>
                <p className="content-text">{personalInfo.summary}</p>
              </div>
            )}

            <div className="r-pb-5">
              <h3 className="section-title">Experience</h3>
              <div className="subsection">
                <h4 className="subsection-title">Account Director</h4>
                <div className="flex justify-between">
                  <p className="subsection-subtitle">Edelman</p>
                  <div className="flex justify-between r-gap-3 r-mb-2">
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      2019 - 2023
                    </p>
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faLocationDot} />
                      San Francisco, California
                    </p>
                  </div>
                </div>
                <p className="content-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus ad eveniet
                  error deleniti eum?
                </p>
                <ul className="content-text r-mt-1 r-mb-3 list-disc r-ps-5">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                </ul>
              </div>
              <div className="subsection">
                <h4 className="subsection-title">Account Director</h4>
                <div className="flex justify-between">
                  <p className="subsection-subtitle">Edelman</p>
                  <div className="flex justify-between r-gap-3 r-mb-2">
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      2019 - 2023
                    </p>
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faLocationDot} />
                      San Francisco, California
                    </p>
                  </div>
                </div>
                <p className="content-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus ad eveniet
                  error deleniti eum?
                </p>
                <ul className="content-text r-mt-1 r-mb-3 list-disc r-ps-5">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                </ul>
              </div>
              <div className="subsection">
                <h4 className="subsection-title">Account Director</h4>
                <div className="flex justify-between">
                  <p className="subsection-subtitle">Edelman</p>
                  <div className="flex justify-between r-gap-3 r-mb-2">
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      2019 - 2023
                    </p>
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faLocationDot} />
                      San Francisco, California
                    </p>
                  </div>
                </div>
                <p className="content-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus ad eveniet
                  error deleniti eum?
                </p>
                <ul className="content-text r-mt-1 r-mb-3 list-disc r-ps-5">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta?</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="section-title">Education</h3>
              <div>
                <h4 className="subsection-title">Master's Degree in Business Administration</h4>
                <div className="flex justify-between">
                  <p className="subsection-subtitle">Stanford University</p>
                  <div className="flex justify-between r-gap-3 r-mb-2">
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      2011 - 2013
                    </p>
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faLocationDot} />
                      Stanford, California
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="subsection-title">Bachelor's Degree in Business Administration</h4>
                <div className="flex justify-between">
                  <p className="subsection-subtitle">Stanford University</p>
                  <div className="flex justify-between r-gap-3 r-mb-2">
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      2011 - 2013
                    </p>
                    <p className="text-icons">
                      <FontAwesomeIcon icon={faLocationDot} />
                      Stanford, California
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/5 r-ps-5">
            <div className="r-pb-5">
              <h3 className="section-title">Strengths</h3>
              <ul className="flex flex-col r-gap-3">
                <li className="flex r-gap-2">
                  <div className="content-text">
                    <FontAwesomeIcon
                      className="r-mt-1 r-p-2 rounded-full bg-gray-200 text-blue-500"
                      icon={fa1}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium r-text-xs r-leading-6">Strategic Planning</h4>
                    <p className="content-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, aliquid! Quos
                      iure tempore ullam eaque iusto sed voluptatum.
                    </p>
                  </div>
                </li>
                <li className="flex r-gap-2">
                  <div className="content-text">
                    <FontAwesomeIcon
                      className="r-mt-1 r-p-2 rounded-full bg-gray-200 text-blue-500"
                      icon={fa2}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium r-text-xs r-leading-6">Strategic Planning</h4>
                    <p className="content-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, aliquid! Quos
                      iure tempore ullam eaque iusto sed voluptatum.
                    </p>
                  </div>
                </li>
                <li className="flex r-gap-2">
                  <div className="content-text">
                    <FontAwesomeIcon
                      className="r-mt-1 r-p-2 rounded-full bg-gray-200 text-blue-500"
                      icon={fa3}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium r-text-xs r-leading-6">Strategic Planning</h4>
                    <p className="content-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, aliquid! Quos
                      iure tempore ullam eaque iusto sed voluptatum.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="r-pb-5">
              <h3 className="section-title">Certifications</h3>
              <ul className="flex flex-col r-gap-3">
                <li>
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium r-text-xs">Strategic Planning</h4>
                      <p className="text-icons">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        2011 - 2013
                      </p>
                    </div>
                    <p className="text-blue-500 content-text">Stanford University</p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium r-text-xs">Strategic Planning</h4>
                      <p className="text-icons">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        2011 - 2013
                      </p>
                    </div>
                    <p className="text-blue-500 content-text">Stanford University</p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium r-text-xs">Strategic Planning</h4>
                      <p className="text-icons">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        2011 - 2013
                      </p>
                    </div>
                    <p className="text-blue-500 content-text">Stanford University</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="r-pb-5">
              <h3 className="section-title">Skills</h3>
              <ul className="w-full flex r-gap-x-3 r-gap-y-2 flex-wrap r-leading-3 content-text">
                <li className="skills-list">Strategic Planning</li>
                <li className="skills-list">Media Relations</li>
                <li className="skills-list">Team Leadership</li>
                <li className="skills-list">Project Management</li>
                <li className="skills-list">Corporate Communications</li>
                <li className="skills-list">Event Planning</li>
                <li className="skills-list">Content Development</li>
                <li className="skills-list">Cybersecurity</li>
                <li className="skills-list">IoT</li>
                <li className="skills-list">5G</li>
                <li className="skills-list">Cloud</li>
                <li className="skills-list">Cloud</li>
              </ul>
            </div>
            <div>
              <h3 className="section-title">Achievements</h3>
              <ul className="flex flex-col r-gap-3">
                <li>
                  <div>
                    <h4 className="font-medium r-text-xs r-leading-6">Strategic Planning</h4>
                    <p className="content-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, aliquid! Quos
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="font-medium r-text-xs r-leading-6">Strategic Planning</h4>
                    <p className="content-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, aliquid! Quos
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
