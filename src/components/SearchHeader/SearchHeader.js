import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import styles from './SearchHeader.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import useDebounce from '~/hooks/useDebounce';
import * as searchService from '~/services/search';

const cx = classNames.bind(styles);

function SearchHeader() {
    const [searchResult, setSearchResult] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState('');
    const searchInputElement = useRef();
    const [isLoading, setIsLoading] = useState();
    const [isShow, setIsShow] = useState(true);
    const debounced = useDebounce(search, 500);

    const searchChange = (e) => {
        const value = e.target.value;

        if(value.charAt(0) === " "){
            return;
        }

        const isHaveValue = !!value;
        setSearch(value);
        if (isHaveValue) {
            setIsSearch(true);
        } else {
            setIsSearch(false);
        }
    };

    const clearSearch = () => {
        setSearch('');
        setIsSearch(false);
        setSearchResult([]);
        searchInputElement.current.focus();
    };

    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        }
        setIsLoading(true);
        const fetchAPI = async () => {
            const data = await searchService.search(debounced);

            setSearchResult(data);
            setIsShow(true);
            setIsLoading(false);
        };
        fetchAPI();
    }, [debounced]);
    return (
        <div>
            <HeadlessTippy
                onClickOutside={() => setIsShow(false)}
                interactive={true}
                visible={isShow && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
    
                            {searchResult.map((item) => {
                                return <AccountItem key={item.id} data={item} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        onFocus={() => setIsShow(true)}
                        ref={searchInputElement}
                        value={search}
                        onChange={(e) => {
                            searchChange(e);
                        }}
                        className={cx('search-content')}
                        placeholder="Search"
                        spellCheck="false"
                    />
    
                    {isSearch && !isLoading && (
                        <button onClick={() => clearSearch()} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
    
                    {isLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchHeader;
