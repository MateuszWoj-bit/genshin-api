/*
 * Copyright (c) 2023 genshin.dev & MJW
 * Licensed under the Open Software License version 3.0
 */
// import Router from 'koa-router';
// import {
//   getAvailableEntities,
//   getAvailableImages,
//   getEntity,
//   getImage,
//   getTypes,
// } from '../modules/filesystem';





import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  const queryParameters = req.query;
  res.json({
    message: `Received query parameters: ${JSON.stringify(queryParameters)}`,
  });
});

router.get("/", async (req, res) => {
  const types = await getTypes(); // You need to define and import getTypes()
  res.json({ types });
});

export default router;

// router.get('/:type', async (ctx) => {
//   const { type } = ctx.params;
//   try {
//     // const entityNames = await getAvailableEntities(type);
//       // ctx.body = entityNames;
//       ctx.body = "howdy";
//   } catch (e) {
//     ctx.status = 404;
//     // const availableTypes = await getTypes();
//     ctx.body = {
//       error: e.message,
//       availableTypes,
//     };
//   }
// });

// router.get('/:type/all', async (ctx) => {
//   try {
//     const { lang, ...params } = ctx.query;
//     const { type } = ctx.params;
//     const entities = await getAvailableEntities(type);

//     if (!entities) return;

//     const entityObjects = await Promise.all(
//       entities.map(async (id) => {
//         try {
//           return await getEntity(type, id,);
//         } catch (e) {
//           return null;
//         }
//       }),
//     );

//     ctx.body = entityObjects.filter((entity) => {
//       if (!entity) return;

//       for (const key of Object.keys(params)) {
//         const value = entity[key];

//         switch (typeof value) {
//           case 'string':
//             if (!value.includes(params[key])) return false;
//             break;
//           default:
//             if (value != params[key]) return false;
//             break;
//         }
//       }

//       return true;
//     });
//   } catch (e) {
//     ctx.status = 404;
//     ctx.body = { error: e.message };
//   }
// });

// router.get('/:type/:id', async (ctx) => {
//   try {
//     const { lang } = ctx.query;
//     const { type, id } = ctx.params;

//     ctx.body = await getEntity(type, id, lang);
//   } catch (e) {
//     ctx.status = 404;
//     ctx.body = { error: e.message };
//   }
// });

// router.get('/:type/:id/list', async (ctx) => {
//   const { type, id } = ctx.params;

//   try {
//     ctx.body = await getAvailableImages(type, id);
//   } catch (e) {
//     ctx.status = 404;
//     ctx.body = { error: e.message };
//   }
// });

// router.get('/:type/:id/:imageType', async (ctx) => {
//   const { type, id, imageType } = ctx.params;

//   try {
//     const image = await getImage(type, id, imageType);

//     ctx.body = image.image;
//     ctx.type = image.type;
//   } catch (e) {
//     ctx.status = 404;
//     try {
//       const av = await getAvailableImages(type, id);
//       ctx.body = { error: e.message, availableImages: av };
//     } catch (e) {
//       ctx.body = { error: e.message };
//     }
//   }
// });
