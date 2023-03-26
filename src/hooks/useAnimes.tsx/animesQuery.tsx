const query = `
    query ($page: Int) {
        Page(page: $page, perPage: 20) {
            media(type: ANIME, genre: "Action", startDate_greater: 2020, format_in: MOVIE, sort: START_DATE) {
            id
            siteUrl
            title {
                native
            }
            }
        }
    }
`;

export default query;