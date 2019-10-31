const menus = [
    {
        title: '首页',
        key:'/',
        components: [
            {name:'Home',path:'/'}
        ]
    },
    {
        title:'用户管理',
        icon: 'usergroup-add',
        key:'/users',
        subs: [
            {
                title:'权限管理',
                icon: 'lock',
                key: '/users/permissions',
                components:[
                    {name: 'permissions', path: '/users/permissions'}
                ]
            },
            {
                title: '角色管理',
                icon: 'solution',
                key: '/users/roles',
                components: [
                  {name: 'roles', path: '/users/roles'}
                ]
            },
            {
                title: '账户管理',
                icon: 'team',
                key: '/users/accounts',
                components: [
                  {name: 'accounts', path: '/users/accounts'}
                ]
              },
        ]
    }
]

export default menus;