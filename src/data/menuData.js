export const menuData = [
  {
    "id": "desayuno",
    "nameKey": "menu_desayuno_name",
    "icon": "/images/icons/breakfast.png",
    "schedule": {
      "start": "00:00",
      "end": "23:59"
    },
    "categories": [
      {
        "id": "cafes",
        "nameKey": "menu_cafes_name",
        "items": [
          {
            "id": "cafe-solo-espresso",
            "nameKey": "menu_cafe_solo_espresso_name",
            "price": "1.60€",
            "image": "/images/dishes/cafe-solo-espresso.jpeg",
            "descriptionKey": "menu_cafe_solo_espresso_desc",
            "ingredients": [
              "ing_cafe"
            ],
            "allergens": [],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "cortado",
            "nameKey": "menu_cortado_name",
            "price": "1.80€",
            "image": "/images/dishes/cortado.png",
            "descriptionKey": "menu_cortado_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja_bebida_vegetal_0_30"
          },
          {
            "id": "cortado-largo",
            "nameKey": "menu_cortado_largo_name",
            "price": "2.00€",
            "image": "/images/dishes/cortado-largo.png",
            "descriptionKey": "menu_cortado_largo_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja_bebida_vegetal_0_30"
          },
          {
            "id": "americano",
            "nameKey": "menu_americano_name",
            "price": "1.80€",
            "image": "/images/dishes/americano.jpeg",
            "descriptionKey": "menu_americano_desc",
            "ingredients": [
              "ing_cafe",
              "ing_agua_caliente"
            ],
            "allergens": [],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "leche-y-leche",
            "nameKey": "menu_leche_y_leche_name",
            "price": "1.90€",
            "image": "/images/dishes/leche-y-leche.png",
            "descriptionKey": "menu_leche_y_leche_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche",
              "ing_leche_condensada"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "cafe-con-leche",
            "nameKey": "menu_cafe_con_leche_name",
            "price": "2.10€",
            "image": "/images/dishes/cafe-con-leche.png",
            "descriptionKey": "menu_cafe_con_leche_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "cafe-con-leche-xl",
            "nameKey": "menu_cafe_con_leche_xl_name",
            "price": "2.90€",
            "image": "/images/dishes/cafe-con-leche-xl.png",
            "descriptionKey": "menu_cafe_con_leche_xl_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "barraquito",
            "nameKey": "menu_barraquito_name",
            "price": "2.40€",
            "image": "/images/dishes/barraquito.jpeg",
            "descriptionKey": "menu_barraquito_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "barraquito-con-licor",
            "nameKey": "menu_barraquito_con_licor_name",
            "price": "2.70€",
            "image": "/images/dishes/barraquito-con-licor.png",
            "descriptionKey": "menu_barraquito_con_licor_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche",
              "ing_licor_43"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "cafe-bombon",
            "nameKey": "menu_cafe_bombon_name",
            "price": "1.90€",
            "image": "/images/dishes/cafe-bombon.png",
            "descriptionKey": "menu_cafe_bombon_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche_condensada"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "guayoyo",
            "nameKey": "menu_guayoyo_name",
            "price": "1.50€",
            "image": "/images/dishes/guayoyo.png",
            "descriptionKey": "menu_guayoyo_desc",
            "ingredients": [
              "ing_cafe",
              "ing_agua_caliente"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "cafe-vienes",
            "nameKey": "menu_cafe_vienes_name",
            "price": "4.10€",
            "image": "/images/dishes/cafe-vienes.png",
            "descriptionKey": "menu_cafe_vienes_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "cafe-irlandes",
            "nameKey": "menu_cafe_irlandes_name",
            "price": "3.80€",
            "image": "/images/dishes/cafe-irlandes.png",
            "descriptionKey": "menu_cafe_irlandes_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche",
              "ing_whisky"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "caffe-affogato",
            "nameKey": "menu_caffe_affogato_name",
            "price": "4.50€",
            "image": "/images/dishes/caffe-affogato.png",
            "descriptionKey": "menu_caffe_affogato_desc",
            "ingredients": [
              "ing_cafe",
              "ing_helado_vainilla",
              "ing_chupito_frangelico"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "cappuccino",
            "nameKey": "menu_cappuccino_name",
            "price": "2.90€",
            "image": "/images/dishes/cappuccino.png",
            "descriptionKey": "menu_cappuccino_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_vegetal"
          },
          {
            "id": "latte-macchiato",
            "nameKey": "menu_latte_macchiato_name",
            "price": "2.80€",
            "image": "/images/dishes/latte-macchiato.png",
            "descriptionKey": "menu_latte_macchiato_desc",
            "ingredients": [
              "ing_leche",
              "ing_cafe"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": ""
          },
          {
            "id": "caramel-latte",
            "nameKey": "menu_caramel_latte_name",
            "price": "3.30€",
            "image": "/images/dishes/caramel-latte.png",
            "descriptionKey": "menu_caramel_latte_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche",
              "ing_caramelo"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "chocolate-caliente",
            "nameKey": "menu_chocolate_caliente_name",
            "price": "2.90€",
            "image": "/images/dishes/chocolate-caliente.png",
            "descriptionKey": "menu_chocolate_caliente_desc",
            "ingredients": [
              "ing_chocolate",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_chocolate"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "colacao",
            "nameKey": "menu_colacao_name",
            "price": "2.80€",
            "image": "/images/dishes/colacao.png",
            "descriptionKey": "menu_colacao_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "cappuccino-kinder",
            "nameKey": "menu_cappuccino_kinder_name",
            "price": "3.30€",
            "image": "/images/dishes/cappuccino-kinder.png",
            "descriptionKey": "menu_cappuccino_kinder_desc",
            "ingredients": [
              "ing_cafe",
              "ing_leche",
              "ing_chocolate"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "leche-con-gofio",
            "nameKey": "menu_leche_con_gofio_name",
            "price": "2.90€",
            "image": "/images/dishes/leche-con-gofio.png",
            "descriptionKey": "menu_leche_con_gofio_desc",
            "ingredients": [
              "ing_leche",
              "ing_gofio"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "cafe-con-hielo",
            "nameKey": "menu_cafe_con_hielo_name",
            "price": "1.80€",
            "image": "/images/dishes/cafe-con-hielo.png",
            "descriptionKey": "menu_cafe_con_hielo_desc",
            "ingredients": [
              "ing_cafe",
              "ing_agua"
            ],
            "allergens": [],
            "badges": [
              "badge_cafe"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_leche_sin_lactosa_avena_o_soja"
          },
          {
            "id": "te-organico",
            "nameKey": "menu_te_organico_name",
            "price": "2.80€",
            "image": "/images/dishes/te-organico.png",
            "descriptionKey": "menu_te_organico_desc",
            "ingredients": [
              "ing_verde",
              "ing_verde_con_gengibre_y_limon",
              "ing_verde_con_naranja_y_arandanos",
              "ing_negro_chai",
              "ing_darjeeling",
              "ing_verbena_de_menta",
              "ing_chocolate_y_almendras",
              "ing_infusion_del_bosque",
              "ing_fresa_y_vainilla",
              "ing_manzanilla"
            ],
            "allergens": [],
            "badges": [
              "badge_te"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "te-roibos",
            "nameKey": "menu_te_roibos_name",
            "price": "3.00€",
            "image": "/images/dishes/te-roibos.png",
            "descriptionKey": "menu_te_roibos_desc",
            "ingredients": [
              "ing_roibos_de_naranja",
              "ing_roiobos_dulce"
            ],
            "allergens": [],
            "badges": [
              "badge_te"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "sandwiches",
        "nameKey": "menu_sandwiches_name",
        "items": [
          {
            "id": "sandwich-siempre",
            "nameKey": "menu_sandwich_siempre_name",
            "price": "3.80€",
            "image": "/images/dishes/sandwich-siempre.png",
            "descriptionKey": "menu_sandwich_siempre_desc",
            "ingredients": [
              "ing_jamon",
              "ing_queso",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "sandwich-clasico",
            "nameKey": "menu_sandwich_clasico_name",
            "price": "4.20€",
            "image": "/images/dishes/sandwich-clasico.png",
            "descriptionKey": "menu_sandwich_clasico_desc",
            "ingredients": [
              "ing_pollo",
              "ing_mayonesa",
              "ing_tomate",
              "ing_lechuga",
              "ing_queso",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_completo"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "sandwich-la-casita",
            "nameKey": "menu_sandwich_la_casita_name",
            "price": "4.90€",
            "image": "/images/dishes/sandwich-la-casita.png",
            "descriptionKey": "menu_sandwich_la_casita_desc",
            "ingredients": [
              "ing_pastrami",
              "ing_salsa_tartara",
              "ing_pepinillo",
              "ing_queso",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "sandwich-jamon",
            "nameKey": "menu_sandwich_jamon_name",
            "price": "3.60€",
            "image": "/images/dishes/sandwich-jamon.png",
            "descriptionKey": "menu_sandwich_jamon_desc",
            "ingredients": [
              "ing_jamon",
              "ing_pan"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_simple"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "tostas-croissants",
        "nameKey": "menu_tostas_croissants_name",
        "items": [
          {
            "id": "tosta-tumaquin",
            "nameKey": "menu_tosta_tumaquin_name",
            "price": "4.30€",
            "image": "/images/dishes/tosta-tumaquin.png",
            "descriptionKey": "menu_tosta_tumaquin_desc",
            "ingredients": [
              "ing_tomate",
              "ing_jamon_serrano",
              "ing_rucula",
              "ing_pan"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tosta-campestre",
            "nameKey": "menu_tosta_campestre_name",
            "price": "4.20€",
            "image": "/images/dishes/tosta-campestre.png",
            "descriptionKey": "menu_tosta_campestre_desc",
            "ingredients": [
              "ing_calabacin",
              "ing_queso_curado",
              "ing_miel",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_vegetal"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tosta-mantequilla-mermelada",
            "nameKey": "menu_tosta_mantequilla_mermelada_name",
            "price": "3.90€",
            "image": "/images/dishes/tosta-mantequilla-mermelada.png",
            "descriptionKey": "menu_tosta_mantequilla_mermelada_desc",
            "ingredients": [
              "ing_mantequilla",
              "ing_mermelada",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_simple"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "croissant",
            "nameKey": "menu_croissant_name",
            "price": "3.20€",
            "image": "/images/dishes/croissant.png",
            "descriptionKey": "menu_croissant_desc",
            "ingredients": [
              "ing_harina",
              "ing_mantequilla"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "croissant-jamon-queso",
            "nameKey": "menu_croissant_jamon_queso_name",
            "price": "3.90€",
            "image": "/images/dishes/croissant-jamon-queso.png",
            "descriptionKey": "menu_croissant_jamon_queso_desc",
            "ingredients": [
              "ing_jamon",
              "ing_queso",
              "ing_harina"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_completo"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "zumos",
        "nameKey": "menu_zumos_name",
        "items": [
          {
            "id": "zumo-fruta-03",
            "nameKey": "menu_zumo_fruta_03_name",
            "price": "3.80€",
            "image": "/images/dishes/zumo-fruta.png",
            "descriptionKey": "menu_zumo_fruta_03_desc",
            "ingredients": [
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_natural"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "zumo-fruta-05",
            "nameKey": "menu_zumo_fruta_05_name",
            "price": "4.50€",
            "image": "/images/dishes/zumo-fruta.png",
            "descriptionKey": "menu_zumo_fruta_05_desc",
            "ingredients": [
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_natural"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "zumo-combinado",
            "nameKey": "menu_zumo_combinado_name",
            "price": "5.00€",
            "image": "/images/dishes/zumo-combinado.png",
            "descriptionKey": "menu_zumo_combinado_desc",
            "ingredients": [
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_mix"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "limonada-casera",
            "nameKey": "menu_limonada_casera_name",
            "price": "4.00€",
            "image": "/images/dishes/limonada.png",
            "descriptionKey": "menu_limonada_casera_desc",
            "ingredients": [
              "ing_limon",
              "ing_agua"
            ],
            "allergens": [],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "limonada-sabores",
            "nameKey": "menu_limonada_sabores_name",
            "price": "4.50€",
            "image": "/images/dishes/limonada-sabores.png",
            "descriptionKey": "menu_limonada_sabores_desc",
            "ingredients": [
              "ing_limon",
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "batidos",
        "nameKey": "menu_batidos_name",
        "items": [
          {
            "id": "batido-fresa-mango",
            "nameKey": "menu_batido_fresa_mango_name",
            "price": "4.80€",
            "image": "/images/dishes/batido-fresa-mango.png",
            "descriptionKey": "menu_batido_fresa_mango_desc",
            "ingredients": [
              "ing_fruta",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_dulce"
            ],
            "adaptable": true,
            "notes": "note_disponible_con_bebida_vegetal"
          },
          {
            "id": "batido-vainilla-chocolate",
            "nameKey": "menu_batido_vainilla_chocolate_name",
            "price": "5.00€",
            "image": "/images/dishes/batido-vainilla-chocolate.png",
            "descriptionKey": "menu_batido_vainilla_chocolate_desc",
            "ingredients": [
              "ing_leche",
              "ing_cacao"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": true,
            "notes": ""
          },
          {
            "id": "batido-gofio",
            "nameKey": "menu_batido_gofio_name",
            "price": "5.00€",
            "image": "/images/dishes/batido-gofio.png",
            "descriptionKey": "menu_batido_gofio_desc",
            "ingredients": [
              "ing_gofio",
              "ing_leche"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_local"
            ],
            "adaptable": true,
            "notes": ""
          },
          {
            "id": "batido-oreo",
            "nameKey": "menu_batido_oreo_name",
            "price": "5.00€",
            "image": "/images/dishes/batido-oreo.png",
            "descriptionKey": "menu_batido_oreo_desc",
            "ingredients": [
              "ing_galleta",
              "ing_leche"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_popular"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "reposteria",
        "nameKey": "menu_reposteria_name",
        "items": [
          {
            "id": "tartas-caseras",
            "nameKey": "menu_tartas_caseras_name",
            "price": "4.80€",
            "image": "/images/dishes/tartas-caseras.png",
            "descriptionKey": "menu_tartas_caseras_desc",
            "ingredients": [
              "ing_harina",
              "ing_huevo",
              "ing_azucar"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_casero"
            ],
            "adaptable": false,
            "notes": "note_varia_segun_disponibilidad"
          },
          {
            "id": "maria-victoria",
            "nameKey": "menu_maria_victoria_name",
            "price": "5.40€",
            "image": "/images/dishes/maria-victoria.png",
            "descriptionKey": "menu_maria_victoria_desc",
            "ingredients": [
              "ing_harina",
              "ing_huevo",
              "ing_azucar"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "new-york-cookies",
            "nameKey": "menu_new_york_cookies_name",
            "price": "4.20€",
            "image": "/images/dishes/new-york-cookies.png",
            "descriptionKey": "menu_new_york_cookies_desc",
            "ingredients": [
              "ing_harina",
              "ing_azucar"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_dulce"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "cookies",
            "nameKey": "menu_cookies_name",
            "price": "3.00€",
            "image": "/images/dishes/cookies.png",
            "descriptionKey": "menu_cookies_desc",
            "ingredients": [
              "ing_harina",
              "ing_azucar"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "rollitos-canela",
            "nameKey": "menu_rollitos_canela_name",
            "price": "2.40€",
            "image": "/images/dishes/rollitos-canela.png",
            "descriptionKey": "menu_rollitos_canela_desc",
            "ingredients": [
              "ing_harina",
              "ing_canela"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_dulce"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "brownie",
            "nameKey": "menu_brownie_name",
            "price": "3.20€",
            "image": "/images/dishes/brownie.png",
            "descriptionKey": "menu_brownie_desc",
            "ingredients": [
              "ing_chocolate",
              "ing_harina"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_chocolate"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "palmera",
            "nameKey": "menu_palmera_name",
            "price": "3.10€",
            "image": "/images/dishes/palmera.png",
            "descriptionKey": "menu_palmera_desc",
            "ingredients": [
              "ing_harina",
              "ing_azucar"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "palmera-rellena",
            "nameKey": "menu_palmera_rellena_name",
            "price": "4.10€",
            "image": "/images/dishes/palmera-rellena.png",
            "descriptionKey": "menu_palmera_rellena_desc",
            "ingredients": [
              "ing_harina",
              "ing_azucar"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "tartas",
        "nameKey": "menu_tartas_name",
        "dynamic": "cakes"
      },
      {
        "id": "bocadillos",
        "nameKey": "menu_bocadillos_name",
        "items": [
          {
            "id": "bocadillo-chef",
            "nameKey": "menu_bocadillo_chef_name",
            "price": null,
            "sizes": [
              {
                "name": "Pulguita",
                "price": "3.20€"
              },
              {
                "name": "Bocadillo",
                "price": "4.50€"
              }
            ],
            "image": "/images/dishes/bocadillo-chef.png",
            "descriptionKey": "menu_bocadillo_chef_desc",
            "ingredients": [
              "ing_lomo",
              "ing_mostaza",
              "ing_jamon",
              "ing_queso",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": "note_disponible_en_tamano_pulg_o_boc"
          },
          {
            "id": "bocadillo-pata",
            "nameKey": "menu_bocadillo_pata_name",
            "price": null,
            "sizes": [
              {
                "name": "Pulguita",
                "price": "3.20€"
              },
              {
                "name": "Bocadillo",
                "price": "4.80€"
              }
            ],
            "image": "/images/dishes/bocadillo-pata.png",
            "descriptionKey": "menu_bocadillo_pata_desc",
            "ingredients": [
              "ing_pata",
              "ing_pimiento",
              "ing_cebolla",
              "ing_pan"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_tradicional"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "bocadillo-clasico",
            "nameKey": "menu_bocadillo_clasico_name",
            "price": null,
            "sizes": [
              {
                "name": "Pulguita",
                "price": "3.10€"
              },
              {
                "name": "Bocadillo",
                "price": "4.80€"
              }
            ],
            "image": "/images/dishes/bocadillo-clasico.png",
            "descriptionKey": "menu_bocadillo_clasico_desc",
            "ingredients": [
              "ing_pollo",
              "ing_mayonesa",
              "ing_tomate",
              "ing_lechuga",
              "ing_queso",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_completo"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "bocadillo-steak",
            "nameKey": "menu_bocadillo_steak_name",
            "price": null,
            "sizes": [
              {
                "name": "Pulguita",
                "price": "3.50€"
              },
              {
                "name": "Bocadillo",
                "price": "5.20€"
              }
            ],
            "image": "/images/dishes/bocadillo-steak.png",
            "descriptionKey": "menu_bocadillo_steak_desc",
            "ingredients": [
              "ing_ternera",
              "ing_salsa_bbq",
              "ing_queso",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_carne"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "bocadillo-tortilla",
            "nameKey": "menu_bocadillo_tortilla_name",
            "price": null,
            "sizes": [
              {
                "name": "Pulguita",
                "price": "3.50€"
              },
              {
                "name": "Bocadillo",
                "price": "5.00€"
              }
            ],
            "image": "/images/dishes/bocadillo-tortilla.png",
            "descriptionKey": "menu_bocadillo_tortilla_desc",
            "ingredients": [
              "ing_tortilla",
              "ing_lechuga",
              "ing_tomate",
              "ing_mayonesa",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "desayuno-completo",
        "nameKey": "menu_desayuno_completo_name",
        "items": [
          {
            "id": "desayuno-ingles",
            "nameKey": "menu_desayuno_ingles_name",
            "price": "9.50€",
            "image": "/images/dishes/desayuno-ingles.png",
            "descriptionKey": "menu_desayuno_ingles_desc",
            "ingredients": [
              "ing_frijol_rojo",
              "ing_tomate",
              "ing_huevo_frito",
              "ing_salchicha",
              "ing_bacon"
            ],
            "allergens": [
              "huevos"
            ],
            "badges": [
              "badge_completo"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "desayuno-tradicional",
            "nameKey": "menu_desayuno_tradicional_name",
            "price": "7.80€",
            "image": "/images/dishes/desayuno-tradicional.png",
            "descriptionKey": "menu_desayuno_tradicional_desc",
            "ingredients": [
              "ing_tostas",
              "ing_mantequilla",
              "ing_mermelada",
              "ing_queso_curado",
              "ing_jamon_serrano"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_tradicional"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "brunch",
    "nameKey": "menu_brunch_name",
    "icon": "/images/icons/brunch.png",
    "schedule": {
      "start": "00:00",
      "end": "23:59"
    },
    "note": "Reserva con 48h de antelación.",
    "categories": [
      {
        "id": "brunch-included",
        "nameKey": "menu_brunch_included_name",
        "items": [
          {
            "id": "panes",
            "nameKey": "menu_panes_name",
            "allergens": [
              "cereales"
            ]
          },
          {
            "id": "mantequilla",
            "nameKey": "menu_mantequilla_name",
            "allergens": [
              "cereales",
              "leche"
            ]
          },
          {
            "id": "dulce",
            "nameKey": "menu_dulce_name",
            "allergens": [
              "cereales",
              "huevos",
              "leche"
            ]
          },
          {
            "id": "yogur",
            "nameKey": "menu_yogur_name",
            "allergens": [
              "leche"
            ]
          },
          {
            "id": "zumo",
            "nameKey": "menu_zumo_name"
          },
          {
            "id": "spritz",
            "nameKey": "menu_spritz_name"
          }
        ]
      },
      {
        "id": "brunch-options",
        "nameKey": "menu_brunch_options_name",
        "type": "brunch-options",
        "options": [
          {
            "id": "opcion-1",
            "nameKey": "menu_opcion_1_name",
            "price": "16€",
            "choices": [
              {
                "id": "op1-a",
                "nameKey": "menu_op1_a_name",
                "allergens": [
                  "huevos",
                  "leche"
                ]
              },
              {
                "id": "op1-b",
                "nameKey": "menu_op1_b_name",
                "allergens": [
                  "huevos"
                ]
              }
            ]
          },
          {
            "id": "opcion-2",
            "nameKey": "menu_opcion_2_name",
            "price": "18€",
            "choices": [
              {
                "id": "op2-a",
                "nameKey": "menu_op2_a_name",
                "allergens": [
                  "huevos",
                  "leche"
                ]
              },
              {
                "id": "op2-b",
                "nameKey": "menu_op2_b_name",
                "allergens": [
                  "huevos"
                ]
              }
            ]
          },
          {
            "id": "opcion-3",
            "nameKey": "menu_opcion_3_name",
            "price": "20€",
            "choices": [
              {
                "id": "op3-a",
                "nameKey": "menu_op3_a_name",
                "allergens": [
                  "cereales",
                  "leche"
                ]
              },
              {
                "id": "op3-b",
                "nameKey": "menu_op3_b_name",
                "allergens": [
                  "huevos"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bebidas",
    "nameKey": "menu_bebidas_name",
    "icon": "/images/icons/drinks.png",
    "schedule": {
      "start": "00:00",
      "end": "23:00",
      "endOffsetMinutes": 30
    },
    "categories": [
      {
        "id": "agua",
        "nameKey": "menu_agua_name",
        "items": [
          {
            "id": "agua-05",
            "nameKey": "menu_agua_05_name",
            "price": "1.80€",
            "image": "/images/dishes/aguap.jpeg",
            "descriptionKey": "menu_agua_05_desc",
            "ingredients": [
              "ing_agua"
            ],
            "allergens": [],
            "badges": [
              "badge_basico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "agua-15",
            "nameKey": "menu_agua_15_name",
            "price": "2.80€",
            "image": "/images/dishes/agua.png",
            "descriptionKey": "menu_agua_15_desc",
            "ingredients": [
              "ing_agua"
            ],
            "allergens": [],
            "badges": [
              "badge_basico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "agua-gas-05",
            "nameKey": "menu_agua_gas_05_name",
            "price": "2.00€",
            "image": "/images/dishes/agua-gasp.jpeg",
            "descriptionKey": "menu_agua_gas_05_desc",
            "ingredients": [
              "ing_agua"
            ],
            "allergens": [],
            "badges": [
              "badge_gas"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "agua-gas-15",
            "nameKey": "menu_agua_gas_15_name",
            "price": "3.00€",
            "image": "/images/dishes/agua-gas.png",
            "descriptionKey": "menu_agua_gas_15_desc",
            "ingredients": [
              "ing_agua"
            ],
            "allergens": [],
            "badges": [
              "badge_gas"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "refrescos",
        "nameKey": "menu_refrescos_name",
        "items": [
          {
            "id": "refrescos-clasicos",
            "nameKey": "menu_refrescos_clasicos_name",
            "price": "2.90€",
            "image": "/images/dishes/refrescos.png",
            "descriptionKey": "menu_refrescos_clasicos_desc",
            "ingredients": [
              "ing_bebida_carbonatada"
            ],
            "allergens": [],
            "badges": [
              "badge_popular"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "appletiser",
            "nameKey": "menu_appletiser_name",
            "price": "2.90€",
            "image": "/images/dishes/appletiser.png",
            "descriptionKey": "menu_appletiser_desc",
            "ingredients": [
              "ing_manzana"
            ],
            "allergens": [],
            "badges": [
              "badge_fruta"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "aquarius",
            "nameKey": "menu_aquarius_name",
            "price": "2.90€",
            "image": "/images/dishes/aquarius.png",
            "descriptionKey": "menu_aquarius_desc",
            "ingredients": [
              "ing_bebida_isotonica"
            ],
            "allergens": [],
            "badges": [
              "badge_isotonico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "nestea",
            "nameKey": "menu_nestea_name",
            "price": "2.90€",
            "image": "/images/dishes/Nestea.png",
            "descriptionKey": "menu_nestea_desc",
            "ingredients": [
              "ing_te"
            ],
            "allergens": [],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tonica-royal",
            "nameKey": "menu_tonica_royal_name",
            "price": "2.90€",
            "image": "/images/dishes/tonica.png",
            "descriptionKey": "menu_tonica_royal_desc",
            "ingredients": [
              "ing_tonica"
            ],
            "allergens": [],
            "badges": [
              "badge_mix"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "ginger",
            "nameKey": "menu_ginger_name",
            "price": "2.00€",
            "image": "/images/dishes/ginger.png",
            "descriptionKey": "menu_ginger_desc",
            "ingredients": [
              "ing_jengibre"
            ],
            "allergens": [],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "cervezas",
        "nameKey": "menu_cervezas_name",
        "items": [
          {
            "id": "cana",
            "nameKey": "menu_cana_name",
            "price": "2.20€",
            "image": "/images/dishes/cana.png",
            "descriptionKey": "menu_cana_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_draft"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "cana-limon",
            "nameKey": "menu_cana_limon_name",
            "price": "2.60€",
            "image": "/images/dishes/cana-limon.png",
            "descriptionKey": "menu_cana_limon_desc",
            "ingredients": [
              "ing_cerveza",
              "ing_limon"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "jarra",
            "nameKey": "menu_jarra_name",
            "price": "3.20€",
            "image": "/images/dishes/jarra.png",
            "descriptionKey": "menu_jarra_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_draft"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "jarra-limon",
            "nameKey": "menu_jarra_limon_name",
            "price": "3.40€",
            "image": "/images/dishes/jarra-limon.png",
            "descriptionKey": "menu_jarra_limon_desc",
            "ingredients": [
              "ing_cerveza",
              "ing_limon"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-pilsen",
            "nameKey": "menu_dorada_pilsen_name",
            "price": "3.00€",
            "image": "/images/dishes/dorada-pilsen.png",
            "descriptionKey": "menu_dorada_pilsen_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_botella"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-especial",
            "nameKey": "menu_dorada_especial_name",
            "price": "3.50€",
            "image": "/images/dishes/dorada-especial.png",
            "descriptionKey": "menu_dorada_especial_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_botella"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-negra",
            "nameKey": "menu_dorada_negra_name",
            "price": "3.10€",
            "image": "/images/dishes/dorada-negra.png",
            "descriptionKey": "menu_dorada_negra_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_negra"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-tostada",
            "nameKey": "menu_dorada_tostada_name",
            "price": "3.50€",
            "image": "/images/dishes/dorada-tostada.png",
            "descriptionKey": "menu_dorada_tostada_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_tostada"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-tostada-00",
            "nameKey": "menu_dorada_tostada_00_name",
            "price": "3.20",
            "image": "/images/dishes/dorada-00.png",
            "descriptionKey": "menu_dorada_tostada_00_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_tostada"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-00",
            "nameKey": "menu_dorada_00_name",
            "price": "3.00€",
            "image": "/images/dishes/dorada-sin.png",
            "descriptionKey": "menu_dorada_00_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_sin_alcohol"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-limon",
            "nameKey": "menu_dorada_limon_name",
            "price": "3.20€",
            "image": "/images/dishes/dorada-sin-limon.png",
            "descriptionKey": "menu_dorada_limon_desc",
            "ingredients": [
              "ing_cerveza",
              "ing_limon"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dorada-gluten-free",
            "nameKey": "menu_dorada_gluten_free_name",
            "price": "3.60€",
            "image": "/images/dishes/dorada-gluten.png",
            "descriptionKey": "menu_dorada_gluten_free_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [],
            "badges": [
              "badge_gluten_free"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "corona",
            "nameKey": "menu_corona_name",
            "price": "3.50€",
            "image": "/images/dishes/corona.png",
            "descriptionKey": "menu_corona_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_import"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "cerveza-1906",
            "nameKey": "menu_1906_name",
            "price": "3.80€",
            "image": "/images/dishes/1906.png",
            "descriptionKey": "menu_1906_desc",
            "ingredients": [
              "ing_cerveza"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_premium"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "kopparberg",
            "nameKey": "menu_kopparberg_name",
            "price": "4.50€",
            "image": "/images/dishes/kopparberg.png",
            "descriptionKey": "menu_kopparberg_desc",
            "ingredients": [
              "ing_sidra"
            ],
            "allergens": [],
            "badges": [
              "badge_frutal"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tinto-verano",
            "nameKey": "menu_tinto_verano_name",
            "price": "5.10€",
            "image": "/images/dishes/tinto-verano.png",
            "descriptionKey": "menu_tinto_verano_desc",
            "ingredients": [
              "ing_vino",
              "ing_limon"
            ],
            "allergens": [
              "sulfitos"
            ],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "blanco-verano",
            "nameKey": "menu_blanco_verano_name",
            "price": "5.10€",
            "image": "/images/dishes/blanco-verano.png",
            "descriptionKey": "menu_blanco_verano_desc",
            "ingredients": [
              "ing_vino",
              "ing_limon"
            ],
            "allergens": [
              "sulfitos"
            ],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "zumos-bebidas",
        "nameKey": "menu_zumos_name",
        "items": [
          {
            "id": "bebida-zumo-fruta-03",
            "nameKey": "menu_zumo_fruta_03_name",
            "price": "4.00€",
            "image": "/images/dishes/zumo-fruta.png",
            "descriptionKey": "menu_zumo_fruta_03_desc",
            "ingredients": [
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_natural"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "bebida-zumo-fruta-05",
            "nameKey": "menu_zumo_fruta_05_name",
            "price": "5.00€",
            "image": "/images/dishes/zumo-fruta.png",
            "descriptionKey": "menu_zumo_fruta_05_desc",
            "ingredients": [
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_natural"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "bebida-zumo-combinado",
            "nameKey": "menu_zumo_combinado_name",
            "price": "5.50€",
            "image": "/images/dishes/zumo-combinado.png",
            "descriptionKey": "menu_zumo_combinado_desc",
            "ingredients": [
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_mix"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "bebida-limonada-casera",
            "nameKey": "menu_limonada_casera_name",
            "price": "4.00€",
            "image": "/images/dishes/limonada.png",
            "descriptionKey": "menu_limonada_casera_desc",
            "ingredients": [
              "ing_limon",
              "ing_agua"
            ],
            "allergens": [],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "bebida-limonada-sabores",
            "nameKey": "menu_limonada_sabores_name",
            "price": "4.50€",
            "image": "/images/dishes/limonada-sabores.png",
            "descriptionKey": "menu_limonada_sabores_desc",
            "ingredients": [
              "ing_limon",
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "cocktails",
        "nameKey": "menu_cocktails_name",
        "items": [
          {
            "id": "combinado-clasico",
            "nameKey": "menu_combinado_clasico_name",
            "price": "9.00€",
            "image": "/images/dishes/combinado.png",
            "descriptionKey": "menu_combinado_clasico_desc",
            "ingredients": [
              "ing_alcohol"
            ],
            "allergens": [],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "combinado-premium",
            "nameKey": "menu_combinado_premium_name",
            "price": "11.00€",
            "image": "/images/dishes/combinado-premium.png",
            "descriptionKey": "menu_combinado_premium_desc",
            "ingredients": [
              "ing_alcohol"
            ],
            "allergens": [],
            "badges": [
              "badge_premium"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "baileys",
            "nameKey": "menu_baileys_name",
            "price": "6.00€",
            "image": "/images/dishes/baileys.png",
            "descriptionKey": "menu_baileys_desc",
            "ingredients": [
              "ing_licor",
              "ing_leche"
            ],
            "allergens": [
              "leche"
            ],
            "badges": [
              "badge_licor"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "mojito-clasico",
            "nameKey": "menu_mojito_clasico_name",
            "price": "9.00€",
            "image": "/images/dishes/mojito.png",
            "descriptionKey": "menu_mojito_clasico_desc",
            "ingredients": [
              "ing_ron",
              "ing_menta",
              "ing_limon"
            ],
            "allergens": [],
            "badges": [
              "badge_popular"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "mojito-sabores",
            "nameKey": "menu_mojito_sabores_name",
            "price": "9.50€",
            "image": "/images/dishes/mojito.png",
            "descriptionKey": "menu_mojito_sabores_desc",
            "ingredients": [
              "ing_ron",
              "ing_fruta"
            ],
            "allergens": [],
            "badges": [
              "badge_mix"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "mojito-sin-alcohol",
            "nameKey": "menu_mojito_sin_alcohol_name",
            "price": "8.00€",
            "image": "/images/dishes/mojito.png",
            "descriptionKey": "menu_mojito_sin_alcohol_desc",
            "ingredients": [
              "ing_menta",
              "ing_limon"
            ],
            "allergens": [],
            "badges": [
              "badge_sin_alcohol"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "pina-colada",
            "nameKey": "menu_pina_colada_name",
            "price": "10.00€",
            "image": "/images/dishes/pina-colada.png",
            "descriptionKey": "menu_pina_colada_desc",
            "ingredients": [
              "ing_pina",
              "ing_coco"
            ],
            "allergens": [],
            "badges": [
              "badge_tropical"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "pina-colada-sin-alcohol",
            "nameKey": "menu_pina_colada_sin_alcohol_name",
            "price": "8.00€",
            "image": "/images/dishes/pina-colada.png",
            "descriptionKey": "menu_pina_colada_sin_alcohol_desc",
            "ingredients": [
              "ing_pina",
              "ing_coco"
            ],
            "allergens": [],
            "badges": [
              "badge_sin_alcohol"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "martini-bianco",
            "nameKey": "menu_martini_bianco_name",
            "price": "6.00€",
            "image": "/images/dishes/martini.png",
            "descriptionKey": "menu_martini_bianco_desc",
            "ingredients": [
              "ing_licor"
            ],
            "allergens": [],
            "badges": [
              "badge_aperitivo"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "martini-rosso",
            "nameKey": "menu_martini_rosso_name",
            "price": "6.00€",
            "image": "/images/dishes/martini.png",
            "descriptionKey": "menu_martini_rosso_desc",
            "ingredients": [
              "ing_licor"
            ],
            "allergens": [],
            "badges": [
              "badge_aperitivo"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "daiquiri",
            "nameKey": "menu_daiquiri_name",
            "price": "10.00€",
            "image": "/images/dishes/daiquiri.png",
            "descriptionKey": "menu_daiquiri_desc",
            "ingredients": [
              "ing_ron",
              "ing_limon"
            ],
            "allergens": [],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "caipirinha",
            "nameKey": "menu_caipirinha_name",
            "price": "10.00€",
            "image": "/images/dishes/caipirinha.png",
            "descriptionKey": "menu_caipirinha_desc",
            "ingredients": [
              "ing_cachaca",
              "ing_limon"
            ],
            "allergens": [],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "margarita",
            "nameKey": "menu_margarita_name",
            "price": "10.00€",
            "image": "/images/dishes/margarita.png",
            "descriptionKey": "menu_margarita_desc",
            "ingredients": [
              "ing_tequila",
              "ing_limon"
            ],
            "allergens": [],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tequila-sunrise",
            "nameKey": "menu_tequila_sunrise_name",
            "price": "10.00€",
            "image": "/images/dishes/tequila-sunrise.png",
            "descriptionKey": "menu_tequila_sunrise_desc",
            "ingredients": [
              "ing_tequila",
              "ing_naranja"
            ],
            "allergens": [],
            "badges": [
              "badge_frutal"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "negroni",
            "nameKey": "menu_negroni_name",
            "price": "10.00€",
            "image": "/images/dishes/negroni.png",
            "descriptionKey": "menu_negroni_desc",
            "ingredients": [
              "ing_gin"
            ],
            "allergens": [],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "aperol-spritz",
            "nameKey": "menu_aperol_spritz_name",
            "price": "9.00€",
            "image": "/images/dishes/aperol.png",
            "descriptionKey": "menu_aperol_spritz_desc",
            "ingredients": [
              "ing_aperol"
            ],
            "allergens": [],
            "badges": [
              "badge_aperitivo"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "moscow-mule",
            "nameKey": "menu_moscow_mule_name",
            "price": "7.50€",
            "image": "/images/dishes/moscow-mule.png",
            "descriptionKey": "menu_moscow_mule_desc",
            "ingredients": [
              "ing_vodka",
              "ing_jengibre"
            ],
            "allergens": [],
            "badges": [
              "badge_refrescante"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "chupito",
            "nameKey": "menu_chupito_name",
            "price": "3.50€",
            "image": "/images/dishes/chupito.png",
            "descriptionKey": "menu_chupito_desc",
            "ingredients": [
              "ing_licor"
            ],
            "allergens": [],
            "badges": [
              "badge_shot"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "chupito-casita",
            "nameKey": "menu_chupito_casita_name",
            "price": "4.00€",
            "image": "/images/dishes/chupito.png",
            "descriptionKey": "menu_chupito_casita_desc",
            "ingredients": [
              "ing_licor"
            ],
            "allergens": [],
            "badges": [
              "badge_especial"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "comida",
    "nameKey": "menu_comida_name",
    "icon": "/images/icons/food.png",
    "schedule": {
      "start": "00:00",
      "endOffsetMinutes": 30
    },
    "categories": [
      {
        "id": "entrantes",
        "nameKey": "menu_entrantes_name",
        "items": [
          {
            "id": "tabla-ibericos-queso-manchego",
            "nameKey": "menu_tabla_ibericos_queso_manchego_name",
            "price": "15.50€",
            "image": "/images/dishes/tabla-ibericos-queso-manchego.jpeg",
            "descriptionKey": "menu_tabla_ibericos_queso_manchego_desc",
            "ingredients": [
              "ing_jamon_iberico",
              "ing_queso_manchego",
              "ing_chorizo",
              "ing_pan_tostado",
              "ing_mantequilla"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_para_compartir"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "saquitos",
            "nameKey": "menu_saquitos_name",
            "price": "2.90€",
            "image": "/images/dishes/saquitos.jpg",
            "descriptionKey": "menu_saquitos_desc",
            "ingredients": [
              "ing_langostino",
              "ing_manzana_dulce",
              "ing_salsa_teriyaki"
            ],
            "allergens": [
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "croquetas",
            "nameKey": "menu_croquetas_name",
            "price": "1.90€",
            "image": "/images/dishes/croquetas.jpg",
            "descriptionKey": "menu_croquetas_desc",
            "ingredients": [
              "ing_espinacas",
              "ing_almogrote",
              "ing_pollo",
              "ing_salsa_huancaina"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "leche",
              "frutos_cascara"
            ],
            "badges": [
              "badge_casero"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "rollitos-pato",
            "nameKey": "menu_rollitos_pato_name",
            "price": "12.30€",
            "image": "/images/dishes/rollitos-pato.jpg",
            "descriptionKey": "menu_rollitos_pato_desc",
            "ingredients": [
              "ing_pato_confitado",
              "ing_salsa_asiatica"
            ],
            "allergens": [
              "huevos",
              "soja",
              "sesamo"
            ],
            "badges": [
              "badge_fusion"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "rollitos-verdura",
            "nameKey": "menu_rollitos_verdura_name",
            "price": "11.90€",
            "image": "/images/dishes/rollitos-verdura.jpg",
            "descriptionKey": "menu_rollitos_verdura_desc",
            "ingredients": [
              "ing_verduras",
              "ing_salsa_thai"
            ],
            "allergens": [
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_vegetal"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "dumplings-pollo-kimchi",
            "nameKey": "menu_dumplings_pollo_kimchi_name",
            "price": "11.50€",
            "image": "/images/dishes/dumplings-pollo-kimchi.png",
            "descriptionKey": "menu_dumplings_pollo_kimchi_desc",
            "ingredients": [
              "ing_pollo",
              "ing_kimchi"
            ],
            "allergens": [
              "cereales",
              "soja",
              "sesamo",
              "sulfitos"
            ],
            "badges": [
              "badge_fusion"
            ],
            "adaptable": false,
            "notes": "note_puede_contener_huevos_pescado_y_apio"
          },
          {
            "id": "langostinos-empanizados",
            "nameKey": "menu_langostinos_empanizados_name",
            "price": "11.50€",
            "image": "/images/dishes/langostinos-empanizados.jpeg",
            "descriptionKey": "menu_langostinos_empanizados_desc",
            "ingredients": [
              "ing_langostinos",
              "ing_empanado",
              "ing_salsa_thai"
            ],
            "allergens": [
              "cereales",
              "crustaceos",
              "huevos",
              "soja"
            ],
            "badges": [
              "badge_marino"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "ensaladilla-la-casita",
            "nameKey": "menu_ensaladilla_la_casita_name",
            "price": "14.50€",
            "image": "/images/dishes/ensaladilla.jpeg",
            "descriptionKey": "menu_ensaladilla_la_casita_desc",
            "ingredients": [
              "ing_batata",
              "ing_ventresca",
              "ing_langostinos",
              "ing_salsa_teriyaki"
            ],
            "allergens": [
              "huevos",
              "soja",
              "pescado",
              "crustaceos"
            ],
            "badges": [
              "badge_la_casita"
            ],
            "adaptable": false,
            "notes": "note_media_racion_disponible_9_60"
          },
          {
            "id": "nachos-la-casita",
            "nameKey": "menu_nachos_la_casita_name",
            "price": "15.50€",
            "image": "/images/dishes/nachos-la-casita.jpg",
            "descriptionKey": "menu_nachos_la_casita_desc",
            "ingredients": [
              "ing_totopos",
              "ing_salsa_cheddar",
              "ing_pico_de_gallo",
              "ing_judias",
              "ing_guacamole",
              "ing_jalapenos"
            ],
            "allergens": [
              "cereales",
              "leche",
              "frutos_cascara"
            ],
            "badges": [
              "badge_para_compartir"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tartar-atun",
            "nameKey": "menu_tartar_atun_name",
            "price": "14.60€",
            "image": "/images/dishes/tartar-atun.jpeg",
            "descriptionKey": "menu_tartar_atun_desc",
            "ingredients": [
              "ing_atun",
              "ing_huevo_frito",
              "ing_papas_crujientes"
            ],
            "allergens": [
              "huevos",
              "pescado",
              "soja"
            ],
            "badges": [
              "badge_pescado"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "huevos-rotos-iberico",
            "nameKey": "menu_huevos_rotos_iberico_name",
            "price": "16.50€",
            "image": "/images/dishes/huevos-rotos-iberico.png",
            "descriptionKey": "menu_huevos_rotos_iberico_desc",
            "ingredients": [
              "ing_huevos",
              "ing_jamon_iberico",
              "ing_papas"
            ],
            "allergens": [
              "huevos"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "huevos-rotos-langostinos",
            "nameKey": "menu_huevos_rotos_langostinos_name",
            "price": "15.50€",
            "image": "/images/dishes/huevos-rotos-langostinos.png",
            "descriptionKey": "menu_huevos_rotos_langostinos_desc",
            "ingredients": [
              "ing_huevos",
              "ing_langostinos",
              "ing_ajo",
              "ing_papas"
            ],
            "allergens": [
              "huevos",
              "crustaceos"
            ],
            "badges": [
              "badge_marino"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "ensaladas",
        "nameKey": "menu_ensaladas_name",
        "items": [
          {
            "id": "ensalada-chef",
            "nameKey": "menu_ensalada_chef_name",
            "price": "13.90€",
            "image": "/images/dishes/ensalada-chef.jpg",
            "descriptionKey": "menu_ensalada_chef_desc",
            "ingredients": [
              "ing_ventresca",
              "ing_vinagreta_de_mango",
              "ing_mix_de_lechuga",
              "ing_cebolla_roja",
              "ing_tomates_cherry"
            ],
            "allergens": [
              "cereales",
              "pescado"
            ],
            "badges": [
              "badge_fresca"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "ensalada-la-jefa",
            "nameKey": "menu_ensalada_la_jefa_name",
            "price": "13.50€",
            "image": "/images/dishes/ensalada-la-jefa.png",
            "descriptionKey": "menu_ensalada_la_jefa_desc",
            "ingredients": [
              "ing_tomate",
              "ing_aceite_de_oliva_virgen_extra",
              "ing_mozzarella",
              "ing_sal",
              "ing_tomillo",
              "ing_pan_tostado"
            ],
            "allergens": [
              "cereales",
              "leche"
            ],
            "badges": [
              "badge_mediterranea"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "ensalada-pollo",
            "nameKey": "menu_ensalada_pollo_name",
            "price": "15.50€",
            "image": "/images/dishes/ensalada-pollo.png",
            "descriptionKey": "menu_ensalada_pollo_desc",
            "ingredients": [
              "ing_pollo_crujiente",
              "ing_mix_de_lechuga",
              "ing_tomates_cherry",
              "ing_parmesano",
              "ing_picatostes",
              "ing_salsa_cesar"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "pescado"
            ],
            "badges": [
              "badge_completa"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "ensalada-thai",
            "nameKey": "menu_ensalada_thai_name",
            "price": "16.20€",
            "image": "/images/dishes/ensalada-thai.jpg",
            "descriptionKey": "menu_ensalada_thai_desc",
            "ingredients": [
              "ing_langostinos",
              "ing_mix_de_lechuga",
              "ing_tomates_cherry",
              "ing_fideos_de_arroz",
              "ing_cacahuetes",
              "ing_cebolla_morada",
              "ing_vinagreta_agripicante"
            ],
            "allergens": [
              "cereales",
              "crustaceos",
              "cacahuete",
              "soja",
              "frutos_cascara",
              "sesamo",
              "sulfitos"
            ],
            "badges": [
              "badge_fusion"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "ensalada-ahumados",
            "nameKey": "menu_ensalada_ahumados_name",
            "price": "16.50€",
            "image": "/images/dishes/ensalada-ahumados.png",
            "descriptionKey": "menu_ensalada_ahumados_desc",
            "ingredients": [
              "ing_salmon",
              "ing_atun",
              "ing_pez_mantequilla",
              "ing_mix_de_lechugas",
              "ing_tomates_cherry",
              "ing_cebolla",
              "ing_vinagreta_de_limon",
              "ing_cilantro"
            ],
            "allergens": [
              "pescado"
            ],
            "badges": [
              "badge_pescado"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "tostas",
        "nameKey": "menu_tostas_name",
        "items": [
          {
            "id": "tosta-champinones",
            "nameKey": "menu_tosta_champinones_name",
            "price": "13.50€",
            "image": "/images/dishes/tosta-champinones.jpg",
            "descriptionKey": "menu_tosta_champinones_desc",
            "ingredients": [
              "ing_champinones",
              "ing_verduras",
              "ing_cebolla_caramelizada",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_vegetal"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tosta-mozzarella",
            "nameKey": "menu_tosta_mozzarella_name",
            "price": "13.90€",
            "image": "/images/dishes/tosta-mozzarella.jpg",
            "descriptionKey": "menu_tosta_mozzarella_desc",
            "ingredients": [
              "ing_mozzarella",
              "ing_tomate_seco",
              "ing_albahaca",
              "ing_aceite_de_oliva_virgen_extra",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "leche"
            ],
            "badges": [
              "badge_mediterranea"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tosta-salmon",
            "nameKey": "menu_tosta_salmon_name",
            "price": "15.50€",
            "image": "/images/dishes/tosta-salmon.png",
            "descriptionKey": "menu_tosta_salmon_desc",
            "ingredients": [
              "ing_salmon_ahumado",
              "ing_salsa_tartara",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "pescado"
            ],
            "badges": [
              "badge_pescado"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "tosta-solomillo",
            "nameKey": "menu_tosta_solomillo_name",
            "price": "15.90€",
            "image": "/images/dishes/tosta-solomillo.jpg",
            "descriptionKey": "menu_tosta_solomillo_desc",
            "ingredients": [
              "ing_solomillo_de_ternera",
              "ing_crema_de_pimientos_dulces",
              "ing_cebolla_caramelizada",
              "ing_escamas_de_queso",
              "ing_pan"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_carne"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "hamburguesas",
        "nameKey": "menu_hamburguesas_name",
        "items": [
          {
            "id": "hamburguesa-calabacin",
            "nameKey": "menu_hamburguesa_calabacin_name",
            "price": "14.90€",
            "image": "/images/dishes/hamburguesa-calabacin.jpg",
            "descriptionKey": "menu_hamburguesa_calabacin_desc",
            "ingredients": [
              "ing_calabacin",
              "ing_frutos_secos",
              "ing_rucula",
              "ing_tomates_secos",
              "ing_mayonesa_de_wasabi",
              "ing_cebolla_caramelizada",
              "ing_papas_fritas"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_vegetal"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "hamburguesa-pollo",
            "nameKey": "menu_hamburguesa_pollo_name",
            "price": "15.50€",
            "image": "/images/dishes/hamburguesa-pollo.jpg",
            "descriptionKey": "menu_hamburguesa_pollo_desc",
            "ingredients": [
              "ing_pollo_de_corral",
              "ing_cebolla_morada",
              "ing_mix_de_lechugas",
              "ing_tomate_natural",
              "ing_alioli_casero",
              "ing_papas_fritas"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_pollo"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "hamburguesa-ternera",
            "nameKey": "menu_hamburguesa_ternera_name",
            "price": "16.50€",
            "image": "/images/dishes/hamburguesa-ternera.jpg",
            "descriptionKey": "menu_hamburguesa_ternera_desc",
            "ingredients": [
              "ing_ternera",
              "ing_pimientos_de_piquillo",
              "ing_rucula",
              "ing_cebolla_caramelizada",
              "ing_mayonesa_de_eneldo",
              "ing_papas_fritas"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_carne"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "hamburguesa-tradicional",
            "nameKey": "menu_hamburguesa_tradicional_name",
            "price": "15.90€",
            "image": "/images/dishes/hamburguesa-tradicional.jpg",
            "descriptionKey": "menu_hamburguesa_tradicional_desc",
            "ingredients": [
              "ing_ternera",
              "ing_cebolla_morada",
              "ing_mix_de_lechugas",
              "ing_tomate_natural",
              "ing_alioli_casero",
              "ing_papas_fritas"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "wok",
        "nameKey": "menu_wok_name",
        "items": [
          {
            "id": "wok-verduras",
            "nameKey": "menu_wok_verduras_name",
            "price": "15.50€",
            "image": "/images/dishes/wok-verduras.jpeg",
            "descriptionKey": "menu_wok_verduras_desc",
            "ingredients": [
              "ing_verduras",
              "ing_salsa_teriyaki",
              "ing_noodles_de_arroz"
            ],
            "allergens": [
              "soja",
              "sesamo"
            ],
            "badges": [
              "badge_vegetal"
            ],
            "adaptable": true,
            "notes": "note_posible_version_sin_gluten_con_suplemento"
          },
          {
            "id": "wok-pollo",
            "nameKey": "menu_wok_pollo_name",
            "price": "16.50€",
            "image": "/images/dishes/wok-pollo.jpg",
            "descriptionKey": "menu_wok_pollo_desc",
            "ingredients": [
              "ing_pollo_crujiente",
              "ing_verduras",
              "ing_sesamo",
              "ing_salsa_teriyaki",
              "ing_noodles_de_arroz"
            ],
            "allergens": [
              "cereales",
              "huevos",
              "soja",
              "sesamo"
            ],
            "badges": [
              "badge_pollo"
            ],
            "adaptable": true,
            "notes": "note_posible_version_sin_gluten_con_suplemento"
          },
          {
            "id": "wok-langostino",
            "nameKey": "menu_wok_langostino_name",
            "price": "17.50€",
            "image": "/images/dishes/wok-langostino.jpg",
            "descriptionKey": "menu_wok_langostino_desc",
            "ingredients": [
              "ing_langostinos",
              "ing_verduras",
              "ing_cacahuetes",
              "ing_salsa_teriyaki",
              "ing_noodles_de_arroz"
            ],
            "allergens": [
              "crustaceos",
              "cacahuete",
              "soja",
              "sesamo"
            ],
            "badges": [
              "badge_marino"
            ],
            "adaptable": true,
            "notes": "note_posible_version_sin_gluten_con_suplemento"
          },
          {
            "id": "wok-ternera",
            "nameKey": "menu_wok_ternera_name",
            "price": "17.90€",
            "image": "/images/dishes/wok-ternera.jpg",
            "descriptionKey": "menu_wok_ternera_desc",
            "ingredients": [
              "ing_solomillo_de_ternera",
              "ing_verduras",
              "ing_sesamo",
              "ing_salsa_teriyaki",
              "ing_noodles_de_arroz"
            ],
            "allergens": [
              "soja",
              "sesamo"
            ],
            "badges": [
              "badge_carne"
            ],
            "adaptable": true,
            "notes": "note_posible_version_sin_gluten_con_suplemento"
          }
        ]
      },
      {
        "id": "arroces",
        "nameKey": "menu_arroces_name",
        "items": [
          {
            "id": "arroz-tres-delicias-langostinos",
            "nameKey": "menu_arroz_tres_delicias_langostinos_name",
            "price": "12.50€",
            "image": "/images/dishes/3delicias.jpeg",
            "descriptionKey": "menu_arroz_tres_delicias_langostinos_desc",
            "ingredients": [
              "ing_arroz",
              "ing_langostinos",
              "ing_jamon",
              "ing_huevo",
              "ing_zanahoria"
            ],
            "allergens": [
              "crustaceos",
              "huevos",
              "soja"
            ],
            "badges": [
              "badge_clasico"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "arroz-frito-ternera",
            "nameKey": "menu_arroz_frito_ternera_name",
            "price": "16.70€",
            "image": "/images/dishes/arroz-frito-ternera.png",
            "descriptionKey": "menu_arroz_frito_ternera_desc",
            "ingredients": [
              "ing_arroz",
              "ing_verduras",
              "ing_ternera",
              "ing_salsa_de_ostras",
              "ing_aceite_de_sesamo",
              "ing_huevo_frito"
            ],
            "allergens": [
              "huevos",
              "soja",
              "sesamo",
              "moluscos"
            ],
            "badges": [
              "badge_fusion"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      },
      {
        "id": "carne",
        "nameKey": "menu_carne_name",
        "items": [
          {
            "id": "pollo-infantil",
            "nameKey": "menu_pollo_infantil_name",
            "price": "13.60€",
            "image": "/images/dishes/pollo-infantil.png",
            "descriptionKey": "menu_pollo_infantil_desc",
            "ingredients": [
              "ing_pollo_crujiente",
              "ing_papas_fritas"
            ],
            "allergens": [
              "cereales",
              "huevos"
            ],
            "badges": [
              "badge_kids"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "poke-mexicano",
            "nameKey": "menu_poke_mexicano_name",
            "price": "15.10€",
            "image": "/images/dishes/poke-mexicano.png",
            "descriptionKey": "menu_poke_mexicano_desc",
            "ingredients": [
              "ing_pollo_de_corral",
              "ing_chipotle",
              "ing_arroz_basmati",
              "ing_pico_de_gallo",
              "ing_guacamole",
              "ing_frijoles",
              "ing_cilantro",
              "ing_chips_de_platano"
            ],
            "allergens": [
              "cereales"
            ],
            "badges": [
              "badge_fusion"
            ],
            "adaptable": false,
            "notes": ""
          },
          {
            "id": "ternera-salteada",
            "nameKey": "menu_ternera_salteada_name",
            "price": "17.10€",
            "image": "/images/dishes/ternera-salteada.png",
            "descriptionKey": "menu_ternera_salteada_desc",
            "ingredients": [
              "ing_ternera",
              "ing_salsa_anticucho",
              "ing_papas_negras",
              "ing_tomate_cherry",
              "ing_manzana_caramelizada"
            ],
            "allergens": [],
            "badges": [
              "badge_carne"
            ],
            "adaptable": false,
            "notes": ""
          }
        ]
      }
    ]
  }
];
