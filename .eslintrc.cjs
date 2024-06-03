module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', 'react-hooks', 'prettier', 'import'],
    rules: {
        'prettier/prettier': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before'
                    },
                    {
                        pattern: 'swiper/modules',
                        group: 'external',
                        position: 'before'
                    }
                ]
            }
        ]
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['*.tsx', '*.jsx'],
            rules: {
                'react/display-name': 'off'
            }
        }
    ]
}
