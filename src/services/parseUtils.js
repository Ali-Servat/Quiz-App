export const makeJSObject = (parseObject) => {
     const object = {};
     for (const attribute in parseObject.attributes) {
          object[attribute] = parseObject.get(attribute);
     }

     return object;
};
