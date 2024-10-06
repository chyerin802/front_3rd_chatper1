/** @jsx createVNode */
/** @jsxFrag Fragment */
import { createVNode } from '../../lib';
import { Fragment } from '../base';

const getNavItemClass = (path) => {
	const currentPath = window.location.pathname;
	return currentPath === path ? 'text-blue-600 font-bold' : 'text-gray-600';
};

export const Navigation = ({ loggedIn }) => (
	<nav class="bg-white shadow-md p-2 sticky top-14">
		<ul class="flex justify-around">
			<li>
				<a href="/" class={getNavItemClass('/')} data-link>
					홈
				</a>
			</li>
			{loggedIn ? (
				<>
					<li>
						<a href="/profile" class={getNavItemClass('/profile')} data-link>
							프로필
						</a>
					</li>
					<li>
						<a href="#" id="logout" class="text-gray-600">
							로그아웃
						</a>
					</li>
				</>
			) : (
				<li>
					<a href="/login" class={getNavItemClass('/login')} data-link>
						로그인
					</a>
				</li>
			)}
		</ul>
	</nav>
);
