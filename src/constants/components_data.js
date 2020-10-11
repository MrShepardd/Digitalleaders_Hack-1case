const get_cluster_polygons = require('./get_cluster_polygons').default;

const get_atm_location = require('./get_atm_location').default;

const get_people_flow = require('./get_people_flow.json');

const get_district_location = require('./get_district_location').default;

const get_all_atm_location = require('./get_all_atm_location').default;

const get_crowded_places = require('./get_crowded_places').default;

const get_path_crowded_places = require('./get_path_crowded_places').default;

const dashboardData = {
    get_cluster_polygons,
    get_atm_location,
    get_people_flow,
    get_district_location,
    get_all_atm_location,
    get_crowded_places,
    get_path_crowded_places
};

module.exports = {
    dashboardData
};
