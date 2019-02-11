import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio() {
	return (
		<StaticQuery
			query={bioQuery}
			render={data => {
				const { name, place, twitter, picture } = data.allContentfulBio.edges[0].node;
				return (
					<div
						style={{
							display: `flex`,
							marginBottom: rhythm(2.5)
						}}
					>
						<Image
							fluid={picture.fluid}
							alt={name}
							style={{
								marginRight: rhythm(1 / 2),
								marginBottom: 0,
								minWidth: 50,
								height: 50,
								borderRadius: `100%`
							}}
							imgStyle={{
								borderRadius: `50%`
							}}
						/>
						<p>
							Written by <strong>{name}</strong> who lives and works in {place} building useful things.
							{` `}
							<a target="_blank" rel="noopener noreferrer" href={twitter}>
								You should follow him on Twitter
							</a>
						</p>
					</div>
				);
			}}
		/>
	);
}

const bioQuery = graphql`
	query BioQuery {
		allContentfulBio {
			edges {
				node {
					name
					place
					twitter
					picture {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`;

export default Bio;
