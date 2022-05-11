export const filterPlayersByRole = (dataApi = []) => {
    const quantity = dataApi.reduce((acum, item) => {
        if (item.fantasy_role === 0) {
            acum.none += 1;
        } else if (item.fantasy_role === 1) {
            acum.core += 1;
        } else if (item.fantasy_role === 2) {
            acum.support += 1;
        }
        return acum;
    }, { none: 0, core: 0, support: 0 });
    return quantity;
}