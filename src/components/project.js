import React from "react";
import {
  Container,
  Header,
  Grid,
  Image,
  Label,
  Segment
} from "semantic-ui-react";
import Link from 'gatsby-link';
import moment from "moment";
import styled from 'styled-components';
import { getTypeData } from "../utils/helpers";

const ProjectBody = styled.div`
  padding: 20px;
`;

const ProjectCard = styled(Segment)`
  margin: 0px;
  padding: 0 !important;
  -webkit-box-shadow: 1px 5px 5px #ccc !important;
  -moz-box-shadow: 1px 5px 5px #ccc !important;
  box-shadow: 1px 5px 5px #ccc !important;
  min-height: 400px;

    :hover {
      -webkit-box-shadow: 5px 5px 5px #666 !important;
      /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
      -moz-box-shadow: 5px 5px 5px #666 !important;
      /* Firefox 3.5 - 3.6 */
      box-shadow: 5px 5px 5px #666 !important;
      /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  }
`;

const Date = styled.span`

`

const Project = props => {
  const { project } = props;
  const tags = [];
  project.frontmatter.tags.map((tag, i) =>
    tags.push(
      <Label tag size="mini" key={i}>
        {tag}
      </Label>
    )
  );

  return <Grid.Column largeScreen={5} tablet={8} mobile={8}>
    <Link to={project.frontmatter.path}>
      <ProjectCard key={props.id}>
        <Image fluid label={{ color: getTypeData(project.frontmatter.type).color, content: project.frontmatter.type, icon: getTypeData(project.frontmatter.type).icon, ribbon: true }} className="project-image" centered src={project.frontmatter.frontImage} />

        <ProjectBody>
          <Header textAlign="center">
            {project.frontmatter.title}
            <Header.Subheader>
              <Date>
                {moment(project.frontmatter.dateCompleted).format("MMM YYYY")}
              </Date>
            </Header.Subheader>
            <Header.Subheader>
              {project.frontmatter.shortDescription}
            </Header.Subheader>
          </Header>
          <Container textAlign="center">
            <div>{tags}</div>
          </Container>
        </ProjectBody>
      </ProjectCard>
    </Link>
  </Grid.Column>;
};

Project.propTypes = {

};

export default Project;
