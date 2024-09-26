
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
officerName: faker.lorem.sentence(""),
designation: faker.lorem.sentence(""),
telephoneNumber: faker.lorem.sentence(""),
ic: faker.lorem.sentence("8"),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
