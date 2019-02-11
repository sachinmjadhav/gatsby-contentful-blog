import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;
		const posts = data.allContentfulPost.edges;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
				<Bio />
				{posts.map(({ node }) => {
					const title = node.title || node.slug;
					return (
						<div key={node.slug}>
							<h3
								style={{
									marginBottom: rhythm(1 / 4)
								}}
							>
								<Link style={{ boxShadow: `none` }} to={node.slug}>
									{title}
								</Link>
							</h3>
							<p>{node.subtitle}</p>
						</div>
					);
				})}
			</Layout>
		);
	}
}

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
		allContentfulPost {
			edges {
				node {
					title
					subtitle
					author
					slug
				}
			}
		}
	}
`;
