'use client'
import {
	Children,
	type FC,
	type HTMLAttributes,
	type ReactElement,
	cloneElement,
	forwardRef,
	useRef,
} from 'react';
import {
	Autocomplete,
	Avatar,
	Checkbox,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	type ListItemProps,
	ListItemText,
	TextField,
} from '@mui/material';
import { matchSorter } from 'match-sorter';
import { useVirtualizer } from '@tanstack/react-virtual';

export const TanStackVirtualAutocomplete = ({ options }:{options:City[]}) => {

	return (
		<Autocomplete
			ListboxComponent={forwardRef<
				HTMLDivElement,
				HTMLAttributes<HTMLDivElement>
			>(
				(
					{
						children,
						...props
					},
					ref,
				) => {
					const items = Children.toArray(children);
					const parentRef = useRef<HTMLDivElement>(null);
					const rowVirtualizer = useVirtualizer({
						count: items.length,
						estimateSize: () => 68,
						getScrollElement: () => parentRef.current,
					});

					return (
						<div
							ref={ref}
							{...props}
							style={{ padding: 0 }}
						>
							<div
								ref={parentRef}
								style={{
									height: parentRef
										.current
										?.parentElement
										?.getBoundingClientRect()
										.height,
									overflowY: 'auto',
								}}
							>
								<List
									sx={{
										height: `${rowVirtualizer.getTotalSize()}px`,
										position: 'relative',
									}}
								>
									{rowVirtualizer
										.getVirtualItems()
										.map(
											(virtualItem) => {
												const item = items[virtualItem.index] as ReactElement<ListItemProps>;
												return cloneElement(
													item,
													{
														sx: {
															...item.props.sx,
															height: `${virtualItem.size}px`,
															left: 0,
															position: 'absolute',
															top: 0,
															transform: `translateY(${virtualItem.start}px)`,
														},
													},
												);
											},
										)}
								</List>
							</div>
						</div>
					);
				},
			)}
			disablePortal
			filterOptions={(
				options,
				{ inputValue },
			) => inputValue
				? matchSorter(
					options,
					inputValue,
				)
				: options
			}
			getOptionLabel={({ name }) => name}
			options={options}
			renderInput={(params) => (
				<TextField
					{...params}
					label="TanStack Virtual Autocomplete"
				/>
			)}
			renderOption={(
				{
					key,
					...props
				},
				option,
				{ selected },
				_ownerState,
			) => (
				<ListItem
					key={key}
					{...props}
				>
					<ListItemButton>
						<ListItemAvatar>
							<Avatar
								alt={option.country_code}
								src={option.country_code}
								sx={{
									height: 56,
									marginRight: 1,
									width: 56,
								}}
							/>
						</ListItemAvatar>
						<ListItemText primary={option.name} />
						<Checkbox checked={selected} />
					</ListItemButton>
				</ListItem>
			)}
			slotProps={{ popper: { keepMounted: true } }}
		/>
	);
}