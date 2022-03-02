// 无用代码，暂留

import layout from '@/components/layout'

export default [
    {
        path: "/shop",
        name: "Shop",
        component: layout,
        children: [
            {
                path: "add",
                name: "ShopAdd",
                component: () => import('@/views/shoppingGoods/goodsAdd')
            },
            {
                path: "list",
                name: "ShopList",
                component: () => import('@/views/shoppingGoods/goodsList')
            },
            {
                path: "publish",
                name: "ShopPublish",
                component: () => import('@/views/shoppingGoods/goodsPublish')
            }
        ]
    }
]