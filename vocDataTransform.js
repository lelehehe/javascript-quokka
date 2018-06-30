var _ = require("underscore");

var data = [
    {
        "id": 150209,
        "category_code": "Returned",
        "detailed_category_code": "Wrong Item/brand",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:20:10.000Z",
        "updated_at": "2018-06-28T07:20:10.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150210,
        "category_code": "Returned",
        "detailed_category_code": "Sizing",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:20:21.000Z",
        "updated_at": "2018-06-28T07:20:21.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150211,
        "category_code": "Returned",
        "detailed_category_code": "Not as pictured/described",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:20:29.000Z",
        "updated_at": "2018-06-28T07:20:29.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150212,
        "category_code": "Damaged",
        "detailed_category_code": "Poor shipping packaging",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:22:34.000Z",
        "updated_at": "2018-06-28T07:22:34.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150213,
        "category_code": "Damaged",
        "detailed_category_code": "Quality",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:22:41.000Z",
        "updated_at": "2018-06-28T07:22:41.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150214,
        "category_code": "Damaged",
        "detailed_category_code": "Vendor packaging",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:22:49.000Z",
        "updated_at": "2018-06-28T07:22:49.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150215,
        "category_code": "FC",
        "detailed_category_code": "Incomplete set",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:24:49.000Z",
        "updated_at": "2018-06-28T07:24:49.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            },
            {
                "id": 13,
                "name": "zucare-voc-ticket",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150173,
        "category_code": "FC",
        "detailed_category_code": "Order Swap",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2017-06-22T13:51:03.000Z",
        "updated_at": "2017-06-22T13:51:03.000Z",
        "update_actor": "dfontenot@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 7,
                "name": "zucare-reship",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            },
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150216,
        "category_code": "FC",
        "detailed_category_code": "Missing item/component",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:24:58.000Z",
        "updated_at": "2018-06-28T07:24:58.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            },
            {
                "id": 13,
                "name": "zucare-voc-ticket",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150217,
        "category_code": "FC",
        "detailed_category_code": "Wrong Item Received",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:25:10.000Z",
        "updated_at": "2018-06-28T07:25:10.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            },
            {
                "id": 13,
                "name": "zucare-voc-ticket",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150218,
        "category_code": "Shipping",
        "detailed_category_code": "Lost in transit",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:26:26.000Z",
        "updated_at": "2018-06-28T07:26:26.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150219,
        "category_code": "Shipping",
        "detailed_category_code": "DNR",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:26:41.000Z",
        "updated_at": "2018-06-28T07:26:41.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150220,
        "category_code": "Shipping",
        "detailed_category_code": "Returned undeliverable",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:26:56.000Z",
        "updated_at": "2018-06-28T07:26:56.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150221,
        "category_code": "Shipping",
        "detailed_category_code": "Cancel/delay",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:27:10.000Z",
        "updated_at": "2018-06-28T07:27:10.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150222,
        "category_code": "Shipping",
        "detailed_category_code": "Carrier complaint",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:27:27.000Z",
        "updated_at": "2018-06-28T07:27:27.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150223,
        "category_code": "General Feedback",
        "detailed_category_code": "Suggestions",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:28:25.000Z",
        "updated_at": "2018-06-28T07:28:25.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150224,
        "category_code": "General Feedback",
        "detailed_category_code": "Sample inserts",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:28:56.000Z",
        "updated_at": "2018-06-28T07:28:56.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150225,
        "category_code": "General Feedback",
        "detailed_category_code": "Website verbiage",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:29:41.000Z",
        "updated_at": "2018-06-28T07:29:41.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150226,
        "category_code": "General Feedback",
        "detailed_category_code": "Advertisements",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:29:56.000Z",
        "updated_at": "2018-06-28T07:29:56.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150227,
        "category_code": "General Feedback",
        "detailed_category_code": "Policy escalations",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:30:05.000Z",
        "updated_at": "2018-06-28T07:30:05.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150228,
        "category_code": "General Feedback",
        "detailed_category_code": "Promotions",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:30:13.000Z",
        "updated_at": "2018-06-28T07:30:13.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150229,
        "category_code": "General Feedback",
        "detailed_category_code": "Shipping timeframe",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:30:22.000Z",
        "updated_at": "2018-06-28T07:30:22.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    },
    {
        "id": 150230,
        "category_code": "Other",
        "detailed_category_code": "Product safety and compliance",
        "is_order_id_required": "0",
        "is_order_item_id_required": "0",
        "is_refund_id_required": "0",
        "is_return_id_required": "0",
        "is_credit_history_id_required": "0",
        "is_item_cancel_id_required": "0",
        "store_credit_reason_code": null,
        "created_at": "2018-06-28T07:35:35.000Z",
        "updated_at": "2018-06-28T07:35:35.000Z",
        "update_actor": "blindsay@zulily.com",
        "deprecated": "0",
        "systems": [
            {
                "id": 12,
                "name": "zucare-voc",
                "created_at": "2018-06-28T11:38:47.000Z",
                "updated_at": "2018-06-28T11:38:47.000Z",
                "update_actor": "root"
            }
        ]
    }
];

var expectedDataFormat = {
    'returned': [
        { name: 'damanged', reasonId: 12345, isTicket: true}, 
    ]
};

var categories = _
  .chain(data)
  .uniq(function(item) {
    return item.category_code;
  })
  .pluck("category_code")
  .value();

var result = [];
_.each(categories, function(category) {
  var branch = _.chain(data).where({category_code: category})
  .map(function(item){
      var isTicket = _.some(item.systems, function(system) {
          return system.name == "zucare-voc-ticket"; 
        });

      return {
          name: item.detailed_category_code, 
          id: item.id, 
          isTicket: isTicket
      };
  })
  .value();
  var item = {}; 
  item[category] = branch;
  item;
  result.push(item);
});

console.log(result);
